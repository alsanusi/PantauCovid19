import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import CoronaApi from '../../api/CoronaApi';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    padding: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(10),
    }
  }));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const [indonesianData, setIndonesianData] = useState([]);
  const {t} = useTranslation();

  const columns = [
    { title: 'Province', field: 'province',
      cellStyle: {
        fontWeight: 'bold',
      }},
    { title: 'Confirmed', field: 'confirmed', type: 'numeric', width: 300, },
    { title: 'Recovered', field: 'recovered', type: 'numeric', width: 300, },
    { title: 'Death', field: 'death', type: 'numeric', width: 300, },
  ]

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
        } else {
          data = [...response.data];
          data ? setIndonesianData(restructureData(data)) : setIndonesianData([])
        }
      }
    })
  },[indonesianData.province])

  return (
    <div className={classes.padding}>
    <Typography variant="subtitle1" style={{fontWeight: "bold", marginBottom: '10px'}}>
        {t("indonesiaStatusProvinceHeader")}
    </Typography>
    <br/>
    <MaterialTable
      title={"Find your Province"}
      columns={columns}
      data={indonesianData}
      options={{
        headerStyle: {
          backgroundColor: '#E74C3C',
          color: '#FFF',
          fontWeight: 'bold'
        }
      }}
    />
    </div>
  );
}