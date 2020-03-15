import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const basicStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    marginTop: 20,
    borderRadius: 0, 
    boxShadow: "none"
  },
  paperCard: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0, 
    boxShadow: "none"
  },
}));

const cardStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
  },
});

function CardDesign({ ...props }) {
  const classes = cardStyles();

  return (
    <div>
    <Card className={classes.root}>
      <CardContent>
        <div style={{display: "flex"}}>
          <div style={{width: "50%", alignSelf: "center"}}>
            <Typography className={classes.title} gutterBottom>
              {props.img}
            </Typography>
          </div>
          <div style={{width: "50%", textAlign: "right"}}>
            <Typography variant="h2" component="h2">
              {props.value}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default function Dashboard() {
  const classes = basicStyles();
  const [indonesianData, setIndonesianData] = useState({
    countryCode: '',
    countryName: '',
    confirmed: '',
    deaths: '',
    recovered: '',
    dateAsOf: ''
  });

  useEffect(() => {
    CoronaApi.getAllCountry().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
          setIndonesianData({
            countryCode: filterIndonesiaData(response.data).countryCode,
            countryName: filterIndonesiaData(response.data).countryName,
            confirmed: filterIndonesiaData(response.data).confirmed,
            deaths: filterIndonesiaData(response.data).deaths,
            recovered: filterIndonesiaData(response.data).recovered,
            dateAsOf: filterIndonesiaData(response.data).dateAsOf
          })
      }
    })
  },[classes])

  const filterIndonesiaData = (dataResponse) => {
    let dataFilter = dataResponse.filter(x => x.countryName === "Indonesia");
    return dataFilter[0];
  }

  return (
    <div className={classes.root}>
    <Menu/>
      <Grid container>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
            {"Live in Indonesia"}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paperCard}>
            <CardDesign img={<PeopleAltIcon style={{fontSize: 60}}/>} value={indonesianData.confirmed} description={"Total Confirmed Cases."} />
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paperCard}>
            <CardDesign img={<FavoriteIcon style={{fontSize: 60}}/>} value={indonesianData.recovered} description={"Total People Recovered."} />
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
        <Paper className={classes.paperCard}>
            <CardDesign img={<NotInterestedIcon style={{fontSize: 60}}/>} value={indonesianData.deaths} description={"Total People Death."} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}