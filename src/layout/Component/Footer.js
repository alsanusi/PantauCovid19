
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core/';

const footerStyles = makeStyles( theme => ({
    root: {
      width: '100%',
      position: 'fixed',
      zIndex: 999,
      left: 0,
      bottom: 0
    },
    label: {
      fontWeight: 'bold',
    },
    selected: {
      width: "max-content",
    }
  }));
  
export default function Footer() {
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
        <BottomNavigationAction label="© Alkautsars." classes={{ root: classes.label, selected: classes.selected}}/>
      </BottomNavigation>
    );
}