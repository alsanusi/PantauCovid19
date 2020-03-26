import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import IndonesiaTableData from './IndonesiaComponent/IndonesiaTable';
import IndonesiaSummaryData from './IndonesiaComponent/IndonesiaCard';
import Header from './Component/Header';

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
  },
  footer: {
    position: 'fixed',
    left: '0',
    bottom: theme.spacing(4),
    width: '100%',
    textAlign: 'center',
    fontSize: "12px"
  }
}));

function Footer() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
    <Grid container justify="center">
      <Grid item md={12} xs={12} className={classes.footer}>
        {"© Muhammad Alkautsar Sanusi."}
      </Grid>
    </Grid>
  </div>
  );
}

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.padding}>
        <Grid item md={12} xs={12}>
          <Menu/>
          <Header/>
        </Grid>
        <Grid item md={4} xs={12}>
            <IndonesiaSummaryData/>
        </Grid>
        <Grid item md={7} xs={12}>
          <IndonesiaTableData/>
        </Grid>
        <Grid item md={12} xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}