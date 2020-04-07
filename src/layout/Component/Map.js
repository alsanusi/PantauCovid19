import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone';
import HospitalList from '../../api/HospitalList.json'
import HomeIcon from '@material-ui/icons/Home';
import L from 'leaflet'
import PieChart from './PieChart'
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles({
  mapDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
})

const AnalyticsChart = () => {
  return (
    <Grid container justify="center">
      <Grid item md={12} xs={12}>
        <PieChart/>
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

  const Bold = ({ children }) => <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center' }}>{children}</Typography>

  return (
    <Map center={[-3.316694, 114.590111]} zoom={6} className={classes.mapDiv}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        HospitalList.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={position.loc} icon={hospitalIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>{"Rumah Sakit Penanganan COVID19"}</div>
              <hr style={{border: '1px solid red', marginBottom: '20px'}}/>
              <AnalyticsChart/>
              <Bold>{position.name}</Bold>
              <br />
              <div style={{display: 'flex', alignItems: 'center'}}>
                <PhoneIcon style={{ fontSize: '20px', marginRight: '10px' }}/> {position.phoneNumber === "-" ? <div> - </div> : <a href="tel:[position.phoneNumber]"><div>{position.phoneNumber}</div></a>}
              </div>
              <br />
              <div style={{display: 'flex', alignItems: 'center'}}>
                <HomeIcon style={{ fontSize: '20px', marginRight: '10px'}}/> <div>{position.address} </div>
              </div>
            </Popup>
          </Marker>
        )}
    </Map>
  )
}

export default SimpleExample