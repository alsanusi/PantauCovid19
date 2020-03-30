import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Animation from '../../components/Animation';
import AddIcon from '@material-ui/icons/Add';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingTop: '10px',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingBottom: '15px',
  },
  paper: {
    maxWidth: 400,
    margin: `8px auto`,
    padding: '16px',
    borderLeft: `4px solid`,
  },
});

function Card({color, ...props}) {
  const theme = useTheme();
  const styles = useStyles(theme);
  styles.paper.borderLeftColor = color;
  const classes = makeStyles(styles)();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography style={{textAlign: 'left'}} gutterBottom>
              {props.img}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" style={{fontWeight: "bold", textAlign: 'right'}}>
                {props.value}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body2" component="p" style={{textAlign: 'right'}}>
                {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function DataLoading() {
    return (
      <div>
          <Animation json={require("../../assets/lottie/loading-data.json")} style={{marginRight: 'inherit', height: '60px'}} autoplay="true"/>
      </div>
    )
}

export default function IndonesiaCard() {
  const [indonesiaData, setIndonesiaData] = useState({
    confirmed: '',
    deaths: '',
    recovered: '',
    daily: ''
  });

  useEffect(() => {
    CoronaApi.getIndonesiaSummaryData().then({
      complete:(response, e) => {
        if(e) {
          console.log(e)
          window.location.reload()
        } else {
          setIndonesiaData({
            confirmed: response.data[0].totalConfirmed,
            deaths: response.data[0].totalDeaths,
            recovered: response.data[0].totalRecovered,
            daily: response.data[0].dailyConfirmed
          })
        }
      }
    })
  },[indonesiaData.confirmed])

  return (
    <div>
     <Typography variant="subtitle1" style={{fontWeight: "bold", paddingLeft: '32px', paddingTop: '16px'}}>
        {"Current Indonesia Status."}
     </Typography>
     <Grid container justify="space-between">
        <Grid item md xs={12}>
          <Card img={<PeopleAltIcon style={{fontSize: 45, color: "#E74C3C"}}/>} value={indonesiaData.confirmed ? indonesiaData.confirmed.toLocaleString() : <DataLoading/>} description={"Total Confirmed Cases."} color={"#E74C3C"}/>
        </Grid>
        <Grid item md xs={12}>
          <Card img={<FavoriteIcon style={{fontSize: 45, color: "#28B463"}}/>} value={indonesiaData.recovered ? indonesiaData.recovered.toLocaleString() : <DataLoading/>} description={"Total People Recovered."} color={"#28B463"}/>
        </Grid>
        <Grid item md xs={12}>
          <Card img={<NotInterestedIcon style={{fontSize: 45, color: "#17202A"}}/>} value={indonesiaData.deaths ? indonesiaData.deaths.toLocaleString() : <DataLoading/>} description={"Total People Death."} color={"#17202A"}/>
        </Grid>
        <Grid item md xs={12}>
          <Card img={<AddIcon style={{fontSize: 45, color: "#E74C3C"}}/>} value={indonesiaData.daily ? indonesiaData.daily.toLocaleString() : <DataLoading/>} description={"Today Confirmed Case."} color={"#E74C3C"}/>
        </Grid>
      </Grid>
    </div>
  )
}

