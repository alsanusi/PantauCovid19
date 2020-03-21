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
    backgroundColor: '#F5F6FA'
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
  },
  // footer: {
  //   position: 'fixed',
  //   left: '0',
  //   bottom: theme.spacing(2),
  //   width: '100%',
  //   textAlign: 'center',
  //   fontSize: "12px"
  // }
}));

// function Footer() {
//   const classes = useStyles();

//   return(
//     <div className={classes.root}>
//     <Grid container justify="center" spacing={3} className={classes.padding}>
//       <Grid item md={12} xs={12} className={classes.footer}>
//         {"© Muhammad Alkautsar Sanusi."}
//       </Grid>
//     </Grid>
//   </div>
//   );
// }

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
        {/* <Grid item md={12} xs={12}>
          <Footer/>
        </Grid> */}
      </Grid>
    </div>
  );
}