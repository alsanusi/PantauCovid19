import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone';
import HospitalList from '../../api/HospitalList.json'
import HomeIcon from '@material-ui/icons/Home';
import L from 'leaflet'
import PieChart from './PieChart'
import CoronaApi from '../../api/CoronaApi';
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles({
  mapDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
})

const AnalyticsChart = ({...props}) => {
  return (
    <Grid container justify="center">
      <Grid item md={12} xs={12}>
        <PieChart data={props.data}/>
      </Grid>
    </Grid>
  )
}

const hospitalIcon = L.icon({ 
  iconUrl: require("../../assets/img/hospital.svg"),
  iconSize: new L.Point(25, 40)
 })

const SimpleExample = () => {
  const classes = useStyles()
  const [indonesianData, setIndonesianData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const restructureData = (responseData) => {
    let filteredData;
    filteredData = responseData.map(x => ({ 'province': x.attributes.Provinsi, 'confirmed': x.attributes.Kasus_Posi, 'recovered': x.attributes.Kasus_Semb, 'death': x.attributes.Kasus_Meni}));
    return filteredData
    }

  useEffect(() => {
    let data = {};
    CoronaApi.getIndonesianProvinceData().then({
      complete:(response, e) => {
        if(e) {
          console.log(e)
          // window.location.reload();
        } else {
          data = [...response.data];
          data ? setIndonesianData(restructureData(data)) : setIndonesianData([])
        }
      }
    })
  },[indonesianData.province])

  const mapClick = (e) => {
    getProvicebyLang(e.latlng.lat)
  }

  const getProvicebyLang = (lang) => {
    let dataToShow;
    dataToShow = HospitalList.filter(x => x.loc[0] === lang);
    setFilteredData(dataToShow[0].province)
  }

  const showChartData = () => {
    let dataToShow, confirmedData, deathData, recoveredData;
    const newData = [];
    dataToShow = indonesianData.filter(x => x.province === filteredData);
    confirmedData = dataToShow.map(x => ({ 'name': 'Confirmed', 'value': x.confirmed}));
    deathData = dataToShow.map(x => ({ 'name': 'Death', 'value': x.death}));
    recoveredData = dataToShow.map(x => ({ 'name': 'Recovered', 'value': x.recovered}));
    newData.push({...confirmedData[0]}, {...recoveredData[0]}, {...deathData[0]})
    return newData
  }

  const Bold = ({ children }) => <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center' }}>{children}</Typography>

  return (
    <Map center={[-3.316694, 114.590111]} zoom={6} className={classes.mapDiv}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        HospitalList.map((position, idx) =>
          <Marker key={`marker-${idx}`} onclick={mapClick} position={position.loc} icon={hospitalIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>{"Rumah Sakit Penanganan COVID19"}</div>
              <hr style={{border: '1px solid red', marginBottom: '20px'}}/>
              <Bold>{position.name}</Bold>
              <div style={{textAlign: "center"}}>
                {position.province}
              </div>
              <br/>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <PhoneIcon style={{ fontSize: '20px', marginRight: '10px' }}/> {position.phoneNumber === "-" ? <div> - </div> : <a href="tel:[position.phoneNumber]"><div>{position.phoneNumber}</div></a>}
              </div>
              <br />
              <div style={{display: 'flex', alignItems: 'center'}}>
                <HomeIcon style={{ fontSize: '20px', marginRight: '10px'}}/> <div>{position.address} </div>
              </div>
              {
                showChartData()[0].name === undefined ? "" : <AnalyticsChart data={showChartData()}/>
              }
            </Popup>
          </Marker>
        )}
    </Map>
  )
}

export default SimpleExample