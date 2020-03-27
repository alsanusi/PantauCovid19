import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../../api/CoronaApi';
import Animation from '../../components/Animation';
import Moment from 'moment';

const basicStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
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
    backgroundColor: '#F5F6FA'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: "left",
  },
});

function CardTitle({ ...props }) {
  const classes = cardStyles();

  return (
    <div>
    <Card className={classes.otherRoot} style={{ boxShadow: 'none', }}>
      <CardContent>
        <div style={{display: "flex"}}>
          <div style={{width: "10%", alignSelf: "center"}}>
              <Animation json={require("../../assets/lottie/loading.json")}/>
          </div>
          <div style={{width: "90%", alignSelf: "center", textAlign: "left"}}>
              <Typography variant="subtitle1">
                {"Welcome,"}
              </Typography>
              <Typography variant="h4" component="h2" style={{fontWeight: "bold", marginTop: "10px"}}>
                {"STAY SAFE EVERYONE!"}
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

export default function Dashboard() {
  const classes = basicStyles();
  const [globalData, setGlobalData] = useState({
    created: ''
  });

  useEffect(() => {
    CoronaApi.getGlobalData().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
          setGlobalData({
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
     <Grid container direction="column" justify="center">
        <Grid item md xs>
          <Paper className={classes.paperCardHeader}>
            <CardTitle date={filterDate(globalData.dateAsOf)} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}