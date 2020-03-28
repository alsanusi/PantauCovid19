import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2)
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
      height: 140,
    },
  });
  
function MediaCard({ ...props }) {
    const classes = cardStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 'bold'}}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
}

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={12} style={{marginTop: '20px', marginBottom: '20px'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
              How to Avoid Covid19 ?
            </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Prevent Infection" description="Stay at home and keep your distance with others."/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Stay Home" description="Wash your hand often, use hand sanitiser and break the face-touching habit."/>
        </Grid>
        <Grid item xs={12} md={3}>
            <MediaCard title="Stay Healthy" description="Stay healhty by eating clean food, drink more mineral water and do some in-house sport."/>
        </Grid>
      </Grid>
    </div>
  );
}