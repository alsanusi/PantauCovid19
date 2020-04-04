import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Animation from '../../components/Animation';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(40),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <div style={{textAlign: 'center', fontWeight: 'bold'}}>OOPS! Looks like something wrong with the data!</div>
            <Animation json={require("../../assets/lottie/search.json")} autoplay="true" style={{alignItems: 'center', height: '300px','width': '300px'}}/>
            <div style={{textAlign: 'center'}}>We will be back soon, be patient :)</div>
        </Grid>
      </Grid>
    </div>
  );
}