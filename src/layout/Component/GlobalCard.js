import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const basicStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F5F6FA'
  },
  paperCard: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: 0, 
    boxShadow: "none",
    backgroundColor: '#F5F6FA'
  },
  paperCardHeader: {
    borderRadius: 0, 
    boxShadow: "none",
  },
}));

const cardStyles = makeStyles({
  root: {
    minWidth: 275,
    borderTop: `4px solid`
  },
  otherRoot: {
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

function CardDetail({ ...props }) {
  const classes = cardStyles();

  return (
    <div>
    <Card className={classes.root}>
      <CardContent>
        <div style={{display: "flex"}}>
          <div style={{width: "30%", alignSelf: "center"}}>
            <Typography className={classes.title} gutterBottom>
              {props.img}
            </Typography>
          </div>
          <div style={{width: "70%", textAlign: "right"}}>
            <Typography variant="h3" component="h2" style={{fontWeight: "bold"}}>
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
  const [globalData, setGlobalData] = useState({
    confirmed: '',
    deaths: '',
    recovered: '',
    created: ''
  });

  useEffect(() => {
    CoronaApi.getGlobalData().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
          setGlobalData({
            confirmed: response.data.confirmed,
            deaths: response.data.deaths,
            recovered: response.data.recovered,
            created: response.data.created
          })
      }
    })
  },[classes])

  return (
    <div className={classes.root}>
     <Grid container direction="column" justify="center" spacing={3}>
        <Grid item md xs={12}>
          <Paper className={classes.paperCard}>
           <Typography variant="subtitle1" style={{fontWeight: "bold", textAlign: "left"}}>
              {"Current Global Status."}
            </Typography>
            <br/>
            <CardDetail img={<PeopleAltIcon style={{fontSize: 45}}/>} value={globalData.confirmed.toLocaleString()} description={"Total Confirmed Cases."} />
          </Paper>
        </Grid>
        <Grid item md xs={12}>
          <Paper className={classes.paperCard}>
            <CardDetail img={<FavoriteIcon style={{fontSize: 45}}/>} value={globalData.recovered.toLocaleString()} description={"Total People Recovered."} />
          </Paper>
        </Grid>
        <Grid item md xs={12}>
        <Paper className={classes.paperCard}>
            <CardDetail img={<NotInterestedIcon style={{fontSize: 45}}/>} value={globalData.deaths.toLocaleString()} description={"Total People Death."} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}