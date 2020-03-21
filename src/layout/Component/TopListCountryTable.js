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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const [topListCountryData, setTopListCountryData] = useState([]);

  useEffect(() => {
    let data = {};
    CoronaApi.getTopListData().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
         if(response) {
            data = [...response.data];
            setTopListCountryData(data)
         } else {
            setTopListCountryData([])
         }
      }
    })
  },[classes])

  return (
    <div style={{ marginTop: "35px" }}>
    <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
        {"Current Top 3 Country Status."}
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
          {topListCountryData.slice(0, 3).map(row => (
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