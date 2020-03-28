import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const cardStyles = makeStyles({
    root: {
      maxWidth: 330,
      maxHeight: 400
    },
    media: {
      height: 200,
    },
});
  
function MediaCard({ ...props }) {
    const classes = cardStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold'}}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'justify'}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    borderRadius: 0, 
    boxShadow: "none",
    backgroundColor: '#F5F6FA'
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Bold = ({ children }) => <Typography style={{ fontWeight: 'bold', display: 'inline-block' }}>{children}</Typography>

function AutoGridNoWrap() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item style={{alignSelf: 'center'}} md={2}>
            <Avatar alt="Corona Virus" src={require("../../assets/img/corona.png")} className={classes.large}/>
          </Grid>
          <Grid item md={10}>
            <Typography style={{textAlign: 'justify'}}><Bold>Coronavirus disease (COVID-19)</Bold> is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes. - <Bold>WHO 2020</Bold></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              What is Covid19 ?
            </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <AutoGridNoWrap/>
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              COVID19 Symptoms ?
            </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Fever" img={require("../../assets/img/fever.jpg")} description="One of the most popular COVID19 symptoms is fever, which the body temperature is 38°C or higher"/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Shortness of breath" img={require("../../assets/img/cough.jpg")} description="Beside fever, Shortness of breath is also one of the most popular COVID19 symptoms, which will bring pain in your chest."/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Sore throat" img={require("../../assets/img/shore.jpg")} description="Having sore throat is also one of the COVID19 symptoms. Besides that, having dry cough and tiredness also include as COVID19 symptoms."/>
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              How to Avoid COVID19 ?
            </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Stay Home" img={require("../../assets/img/stayHome.jpg")} description="Stop traveling and hang out, just stay at home and keep your distance with others."/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Prevent Infection" img={require("../../assets/img/washHand.jpg")} description="Wash your hand often, use hand sanitiser and break the face-touching habit."/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Stay Healthy" img={require("../../assets/img/jogging.jpg")} description="Stay healhty by eating clean food, drink more mineral water and do some in-house sport."/>
        </Grid>
      </Grid>
    </div>
  );
}