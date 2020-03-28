import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';
import CoronaApi from '../../api/CoronaApi';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Animation from '../../components/Animation';

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

function DataLoading() {
  return (
    <div>
        <Animation json={require("../../assets/lottie/loading-data.json")} style={{marginRight: 'inherit', height: '60px'}}/>
    </div>
  )
}

export default function Dashboard() {
  const [indonesiaData, setIndonesiaData] = useState({
    confirmed: '',
    deaths: '',
    recovered: '',
  });

  useEffect(() => {
    CoronaApi.getIndonesiaSummaryData().then({
      complete:(response, e) => {
        if(e) 
          console.log(e)
         else 
          setIndonesiaData({
            confirmed: response.data[0].positif,
            deaths: response.data[0].meninggal,
            recovered: response.data[0].sembuh,
          })
      }
    })
  },[indonesiaData.confirmed])

  return (
    <div>
     <Grid container direction="column" justify="space-between" style={{paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px'}}>
        <Grid item md xs={12} style={{marginBottom: indonesiaData.confirmed > 100000 ? '20px' : '0px'}}>
           <Typography variant="subtitle1" style={{fontWeight: 'bold'}}>
              {"Current Indonesia Status."}
            </Typography>
            <br/>
            <CardDetail img={<PeopleAltIcon style={{fontSize: 45, color: "#E74C3C"}}/>} value={indonesiaData.confirmed ? indonesiaData.confirmed.toLocaleString() : <DataLoading/>} description={"Total Confirmed Cases."} color={"#E74C3C"} />
        </Grid>
        <Grid item md xs={12}>
            <CardDetail img={<FavoriteIcon style={{fontSize: 45, color: "#28B463"}}/>} value={indonesiaData.recovered ? indonesiaData.recovered.toLocaleString() : <DataLoading/>} description={"Total People Recovered."} color={"#28B463"} />
        </Grid>
        <Grid item md xs={12}>
            <CardDetail img={<NotInterestedIcon style={{fontSize: 45, color: "#17202A"}}/>} value={indonesiaData.deaths ? indonesiaData.deaths.toLocaleString() : <DataLoading/>} description={"Total People Death."} color={"#17202A"} />
        </Grid>
      </Grid>
    </div>
  );
}