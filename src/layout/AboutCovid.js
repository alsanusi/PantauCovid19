import React, { Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core/';
import Menu from './Component/Menu';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Loading from './Component/Loading';

const AvoidCovid = lazy(() => import('./AboutCovid/Card'));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    paddingBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading/>}>
      <Grid container justify="center" className={classes.padding}>
        <Grid item md={12} xs={12}>
          <Menu/>
          <Header/>
        </Grid>
        <Grid item md={12} xs={12}>
          <AvoidCovid/>
        </Grid>
        <Grid item md={12} xs={12}>
          <Footer/>
        </Grid>
      </Grid>
      </Suspense>
    </div>
  );
}