import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CoronaApi from '../../api/CoronaApi';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  padding: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
}));

export default function SimpleTable() {
  const classes = useStyles();
  const [indonesianData, setIndonesianData] = useState([]);

  const filterIndonesiaData = (dataResponse) => {
    let dataFilter = dataResponse.filter(x => x.countryName === "Indonesia");
    return dataFilter;
  }

  useEffect(() => {
    let data = {};
    CoronaApi.getIndonesianData().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
         if(response) {
          data = [...response.data];
          setIndonesianData(filterIndonesiaData(data))
         } else {
          setIndonesianData([])
         }
      }
    })
  },[classes])

  return (
    <div className={classes.padding}>
    <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
        {"Current Indonesia Status."}
    </Typography>
    <br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Confirmed</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Recovered</TableCell>
            <TableCell align="right" style={{fontWeight: "bold"}}>Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {indonesianData.map(row => (
            <TableRow key={row.countryCode}>
              <TableCell component="th" scope="row" style={{fontWeight: "bold"}}>
                {row.countryName}
              </TableCell>
              <TableCell align="right">{row.confirmed.toLocaleString()}</TableCell>
              <TableCell align="right">{row.recovered.toLocaleString()}</TableCell>
              <TableCell align="right">{row.deaths.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}