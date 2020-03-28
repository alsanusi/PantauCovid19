import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Table, Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CoronaApi from '../../api/CoronaApi';

const columns = [
  { 
    id: 'countryName', 
    label: '', 
    minWidth: 100 
  },
  {
    id: 'confirmed',
    label: 'Confirmed',
    minWidth: 50,
  },
  {
    id: 'recovered',
    label: 'Recovered',
    minWidth: 50,
  },  
  {
    id: 'deaths',
    label: 'Death',
    minWidth: 50,
  }
];

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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(10),
  }
}));

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.padding}>
    <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
        {"Current Top Country Status."}
    </Typography>
    <br/>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {topListCountryData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow key={row.countryCode}>
                <TableCell component="th" scope="row" style={{fontWeight: "bold"}}>
                    {row.countryName}
                </TableCell>
                <TableCell>{row.confirmed? row.confirmed.toLocaleString() : 0}</TableCell>
                <TableCell>{row.recovered ? row.recovered.toLocaleString() : 0}</TableCell>
                <TableCell>{row.deaths ? row.deaths.toLocaleString() : 0}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={topListCountryData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}