import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import CoronaApi from '../../api/CoronaApi';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    padding: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    }
  }));

export default function MaterialTableDemo() {
  const classes = useStyles();
  const {t} = useTranslation();
  const [topListCountryData, setTopListCountryData] = useState([]);

  const columns = [
    { title: 'Country Name', field: 'countryName',
      cellStyle: {
        fontWeight: 'bold',
        color: '#039be5'
      }},
    { title: 'Confirmed', field: 'confirmed', type: 'numeric' },
    { title: 'Recovered', field: 'recovered', type: 'numeric' },
    { title: 'Death', field: 'deaths', type: 'numeric' },
  ]

  useEffect(() => {
    let data = {};
    CoronaApi.getAllCountryData().then({
      complete:(response, e) => {
        if(e) {
          console.log(e)
          window.location.reload();
        } else {
         if(response) {
            data = [...response.data];
            data ? setTopListCountryData(data) : setTopListCountryData([])
         }
        }
      }
    })
  },[topListCountryData.countryName])

  return (
    <div className={classes.padding}>
    <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
        {t("globalTableHeader")}
    </Typography>
    <br/>
    <MaterialTable
      title={"Find your Country"}
      columns={columns}
      data={topListCountryData}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          fontWeight: 'bold'
        }
      }}
    />
    </div>
  );
}