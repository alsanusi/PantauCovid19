import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CoronaApi from '../../api/CoronaApi';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 340,
      borderTop: `4px solid #4880FF`
    },
    padding: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingBottom: '15px'
    },
  }));

export default function Example() {
    const classes = useStyles();
    const [indonesianData, setIndonesianData] = useState([]);

    const todayDate = () => {
        let selectedDate, oneDayEarlier;
        oneDayEarlier = new Date();
        oneDayEarlier.setDate(oneDayEarlier.getDate() + 1);
        selectedDate = new Intl.DateTimeFormat('fr-CA').format(oneDayEarlier);
        return selectedDate;
    }

    const restructureData = (responseData) => {
        let filteredData;
        filteredData = responseData.map(x => ({ 'Confirmed': x.total_confirmed, 'Date': moment(x.last_updated).format("MMMM D")}));
        return filteredData
    }

    useEffect(() => {
        let data = {};
        CoronaApi.getDailyIndonesiaData("ID", "2020-03-01", todayDate()).then({
          complete:(response, e) => {
            if(e) {
              console.log(e)
              window.location.reload();
            } else {
              data = [...response.data];
              data ? setIndonesianData(restructureData(data)) : setIndonesianData([])
            }
          }
        })
      },[indonesianData.Confirmed])
    
    return (
    <div className={classes.padding}>
        <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "center"}}>
            {"Indonesia COVID19 Confirmed Statistic."}
        </Typography>
        <br/>
        <Paper style={{padding: '20px'}}>
        <ResponsiveContainer height={400}>
        <LineChart
            data={indonesianData}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{fontSize: 14, fontWeight: 'bold'}} dataKey="Date"/>
            <YAxis tick={{fontSize: 13}}/>
            <Tooltip />
            <Legend verticalAlign="top" height={40}/>
            <Line type="monotone" dataKey="Confirmed" stroke="#E74C3C" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
        </Paper>
    </div>
    );
}
