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
import { useTranslation } from 'react-i18next';

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
  
function AvoidCard({ ...props }) {
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
            <Typography variant="body2" component="p" style={{textAlign: 'justify'}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

function SymptomsCard({ ...props }) {
  const classes = cardStyles();

  return (
    <Card className={classes.root} style={{boxShadow: "none", backgroundColor: "#F5F6FA"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold'}}>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" style={{textAlign: 'justify'}}>
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

function Header() {
  const classes = headerStyles();
  const {t} = useTranslation();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item style={{alignSelf: 'center'}} md={2}>
            <Avatar alt="Corona Virus" src={require("../../assets/img/corona.png")} className={classes.large}/>
          </Grid>
          <Grid item md={10}>
            <Typography style={{textAlign: 'justify'}}>{t('aboutCovid.description')}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              {t('aboutCovid.header')}
            </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <Header/>
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              {t('aboutCovid.covidSymptoms.header')}
            </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <SymptomsCard title={t('aboutCovid.covidSymptoms.fever')} description={t('aboutCovid.covidSymptoms.feverDesc')}/>
        </Grid>
        <Grid item xs={12} md={3}>
            <SymptomsCard title={t('aboutCovid.covidSymptoms.breath')} description={t('aboutCovid.covidSymptoms.breathDesc')}/>
        </Grid>
        <Grid item xs={12} md={3}>
            <SymptomsCard title={t('aboutCovid.covidSymptoms.soreThroat')} description={t('aboutCovid.covidSymptoms.soreThroatDesc')}/>
        </Grid>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '5px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              {t('aboutCovid.avoidCovid.header')}
            </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <AvoidCard title={t('aboutCovid.avoidCovid.stayHome')} img={require("../../assets/img/stayHome.jpg")} description={t('aboutCovid.avoidCovid.stayHomeDesc')}/>
        </Grid>
        <Grid item xs={12} md={3}>
            <AvoidCard title={t('aboutCovid.avoidCovid.preventInfection')} img={require("../../assets/img/washHand.jpg")} description={t('aboutCovid.avoidCovid.preventInfectionDesc')}/>
        </Grid>
        <Grid item xs={12} md={3}>
            <AvoidCard title={t('aboutCovid.avoidCovid.stayHealthy')} img={require("../../assets/img/jogging.jpg")} description={t('aboutCovid.avoidCovid.stayHealthyDesc')}/>
        </Grid>
      </Grid>
    </div>
  );
}