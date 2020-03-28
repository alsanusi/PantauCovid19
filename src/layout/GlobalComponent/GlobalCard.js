import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const basicStyles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: '50%'
  },
  paperCard: {
    borderRadius: 0, 
    maxWidth: 400,
    borderTop: `4px solid`,
  },
  paperCardHeader: {
    borderRadius: 0, 
    boxShadow: "none",
  },
  header: {
    fontWeight: "bold", 
    textAlign: "left"
  },
  title: {
    textAlign: "left",
  },
  basicPadding: {
    paddingTop: '16px',
    paddingLeft: '16px',
    paddingRight: '16px'
  }
});

function CardDetail({ color, ...props }) {
  const theme = useTheme();
  const styles = basicStyles(theme);
  styles.paperCard.borderTopColor = color;
  const classes = makeStyles(styles)();

  return (
    <div>
    <Card className={classes.paperCard}>
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
     <Grid container direction="column" justify="space-between" style={{paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px'}}>
        <Grid item md xs={12} style={{marginBottom: '20px'}}>
           <Typography variant="subtitle1" style={{fontWeight: 'bold'}}>
              {"Current Global Status."}
            </Typography>
            <br/>
            <CardDetail img={<PeopleAltIcon style={{fontSize: 45}}/>} value={globalData.confirmed ? globalData.confirmed.toLocaleString() : 0} description={"Total Confirmed Cases."} color={"#0F4DB2"} />
        </Grid>
        <Grid item md xs={12}>
            <CardDetail img={<FavoriteIcon style={{fontSize: 45}}/>} value={globalData.recovered ? globalData.recovered.toLocaleString() : 0} description={"Total People Recovered."} color={"#4A90E2"} />
        </Grid>
        <Grid item md xs={12}>
            <CardDetail img={<NotInterestedIcon style={{fontSize: 45}}/>} value={globalData.deaths ? globalData.deaths.toLocaleString() : 0} description={"Total People Death."} color={"#0F4DB2"} />
        </Grid>
      </Grid>
    </div>
  );
}