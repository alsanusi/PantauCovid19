import React, { Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core/';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

const TopListCountryTableData = lazy(() => import('../GlobalComponent/GlobalTable'));
const GlobalData = lazy(() => import('../GlobalComponent/GlobalCard'));

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
          <Header/>
        </Grid>
        <Grid item md={4} xs={12}>
          <GlobalData/>
        </Grid>
        <Grid item md={7} xs={12}>
          <TopListCountryTableData/>
        </Grid>
        <Grid item md={12} xs={12}>
          <Footer/>
        </Grid>
      </Grid>
      </Suspense>
    </div>
  );
}