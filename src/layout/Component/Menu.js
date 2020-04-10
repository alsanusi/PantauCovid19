import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      borderRadius: 0, 
      boxShadow: "none",
      backgroundColor: '#E74C3C',
      zIndex: 999
    },
    tab: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }));

function CenteredTabs({location, match, history, ...props}) {
  const classes = useStyles();
  const {t} = useTranslation();
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
            <Tab label="Indonesia" value="/" className={classes.tab}/>
            <Tab label={t("mapMenu")} value="/emergencyMap" className={classes.tab}/>
            <Tab label={t("globalMenu")} value="/global" className={classes.tab}/>
      </Tabs>
    </Paper>
  );
}

export default withRouter(CenteredTabs);