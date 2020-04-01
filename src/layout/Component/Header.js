import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Animation from '../../components/Animation';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingTop: theme.spacing(2),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
    borderRadius: 0, 
    boxShadow: "none",
    backgroundColor: '#F5F6FA'
  },
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();
  const {t} = useTranslation();

  const formatDate = () => {
    let selectedDate;
    selectedDate = new Intl.DateTimeFormat('en-GB', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    }).format(new Date())
    return selectedDate;
}

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item style={{ alignSelf: "center" }}>
              <Animation json={require("../../assets/lottie/loading.json")} autoplay="true"/>
          </Grid>
          <Grid item xs>
              <Typography variant="subtitle1">
                {t("welcome")}
              </Typography>
              <Typography variant="h4" component="h2" style={{fontWeight: "bold", marginTop: "10px"}}>
                {t("header")}
              </Typography>
              <Typography variant="body2" component="p">
                {formatDate()}
              </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}