import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Animation from '../../components/Animation';
import { useTranslation } from 'react-i18next';

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

function CardDetail({color, ...props}) {
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

export default function Dashboard() {
  const {t} = useTranslation();
  const [globalData, setGlobalData] = useState({
    confirmed: '',
    deaths: '',
    recovered: '',
    created: ''
  });

  useEffect(() => {
    let dataResponse = {};
    CoronaApi.getGlobalData().then({
      complete:(response, e) => {
        if(e) {
          console.log(e)
          DataLoading()
        } else {
          dataResponse = response.data
          setGlobalData({
            confirmed: dataResponse.confirmed,
            deaths: dataResponse.deaths,
            recovered: dataResponse.recovered,
            created: dataResponse.created
          })
        }
      }
    })
  },[globalData.created])

  return (
    <div>
    <Typography variant="subtitle1" style={{fontWeight: "bold", paddingLeft: '32px', paddingTop: '16px'}}>
      {t("globalStatusHeader")}
    </Typography>
    <Grid container justify="space-between">
        <Grid item md xs={12}>
          <CardDetail img={<PeopleAltIcon style={{fontSize: 45, color: "#E74C3C"}}/>} value={globalData.confirmed ? globalData.confirmed.toLocaleString() : <DataLoading/>} description={t("status.confirmedCase")} color={"#E74C3C"} />
        </Grid>
        <Grid item md xs={12}>
          <CardDetail img={<FavoriteIcon style={{fontSize: 45, color: "#28B463"}}/>} value={globalData.recovered ? globalData.recovered.toLocaleString() : <DataLoading/>} description={t("status.recoveredCase")} color={"#28B463"} />
        </Grid>
        <Grid item md xs={12}>
          <CardDetail img={<NotInterestedIcon style={{fontSize: 45, color: "#17202A"}}/>} value={globalData.deaths ? globalData.deaths.toLocaleString() : <DataLoading/>} description={t("status.deathCase")} color={"#17202A"} />
        </Grid>
    </Grid>
    </div>
  );
}