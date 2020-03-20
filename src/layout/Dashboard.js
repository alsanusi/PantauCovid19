import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu';
import IndonesiaTableData from './Component/IndonesiaTable';
import TopListCountryTableData from './Component/TopListCountryTable';
import GlobalData from './Component/GlobalCard';
import Header from './Component/Header';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperLeft: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3} className={classes.padding}>
        <Grid item md={12} xs={12}>
          <Menu/>
          <Header/>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paperLeft} style={{borderRadius: 0, boxShadow: "none"}}>
            <GlobalData/>
          </Paper>
        </Grid>
        <Grid item md={7} xs={12}>
          <IndonesiaTableData/>
          <TopListCountryTableData/>
        </Grid>
      </Grid>
    </div>
  );
}