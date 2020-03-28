import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, BottomNavigation, BottomNavigationAction } from '@material-ui/core/';
import Menu from './Component/Menu';
import TopListCountryTableData from './GlobalComponent/TopListCountryTable';
import GlobalData from './GlobalComponent/GlobalCard';
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
  }
}));

const footerStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  label: {
    fontWeight: 'bold',
  },
  selected: {
    width: "max-content",
  }
}));

function Footer() {
  const classes = footerStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        window.open("https://muhalkautsarsanusi.com/", "Author")
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="© Muhammad Alkautsar Sanusi." classes={{ root: classes.label, selected: classes.selected}}/>
    </BottomNavigation>
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
            <GlobalData/>
        </Grid>
        <Grid item md={7} xs={12}>
          <TopListCountryTableData/>
        </Grid>
        <Grid item md={12} xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}