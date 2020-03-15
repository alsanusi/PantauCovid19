import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import Menu from './Menu';
import CoronaApi from '../api/CoronaApi';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 30,
    borderRadius: 0, 
    boxShadow: "none"
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    CoronaApi.getAllCountry().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
          setData(response.data)
      }
    })
  },[classes])

  return (
    <div className={classes.root}>
    <Menu/>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Card/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}