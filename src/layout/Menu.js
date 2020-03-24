import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router";


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      borderRadius: 0, 
      boxShadow: "none",
      backgroundColor: "#4880FF",
    },
  }));

function CenteredTabs({location, match, history, ...props}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");

  useEffect(()=>{
      setValue(match.path);
  },[value, match.path]);

  const handleChange = (event, newValue) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
            <Tab label="Dashboard" value="/" />
            {/* <Tab label="Travel Band" value="/"/> */}
      </Tabs>
    </Paper>
  );
}

export default withRouter(CenteredTabs);