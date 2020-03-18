import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Animation from '../../components/Animation';
import Moment from 'moment';

const basicStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperCard: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: 0, 
    boxShadow: "none",
  },
  paperCardHeader: {
    color: theme.palette.text.secondary,
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

function CardTitle({ ...props }) {
  const classes = cardStyles();

  return (
    <div>
    <Card className={classes.otherRoot} style={{ boxShadow: 'none' }}>
      <CardContent>
        <div style={{display: "flex"}}>
          <div style={{width: "30%", alignSelf: "center"}}>
              <Animation json={require("../../assets/lottie/loading.json")}/>
          </div>
          <div style={{width: "70%", alignSelf: "center", textAlign: "left"}}>
              <Typography variant="h4" component="h2" style={{fontWeight: "bold"}}>
                {"GLOBAL"}
              </Typography>
              <Typography variant="body2" component="p">
                {props.date}
              </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

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
            <Typography variant="h2" component="h2" style={{fontWeight: "bold"}}>
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

  const filterDate = (date) => {
    return Moment(date).utc().format('DD MMMM YYYY - h:mm:ss a.')
  }

  return (
    <div className={classes.root}>
     <Grid container justify="center">
        <Grid item md={3} xs={12}>
          <Paper className={classes.paperCardHeader}>
            <CardTitle date={filterDate(globalData.dateAsOf)} />
          </Paper>
        </Grid>
      </Grid>
     <Grid container justify="center" spacing={1}>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paperCard}>
            <CardDetail img={<PeopleAltIcon style={{fontSize: 60}}/>} value={globalData.confirmed} description={"Total Confirmed Cases."} />
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper className={classes.paperCard}>
            <CardDetail img={<FavoriteIcon style={{fontSize: 60}}/>} value={globalData.recovered} description={"Total People Recovered."} />
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
        <Paper className={classes.paperCard}>
            <CardDetail img={<NotInterestedIcon style={{fontSize: 60}}/>} value={globalData.deaths} description={"Total People Death."} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}