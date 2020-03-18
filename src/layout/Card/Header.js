import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0, 
    boxShadow: "none",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h4" component="h1" style={{fontWeight: "bold"}}>
                    {"COVID-19 INFORMATION"}
                </Typography>
                <Typography component="h2" >
                    {"Overall Information of Corona"}
                </Typography>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}