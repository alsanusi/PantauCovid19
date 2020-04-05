import React, { Suspense, lazy } from 'react';
import './App.css';
import PropTypes from "prop-types";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItemText, ListItemIcon, ListItem }  from '@material-ui/core';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Loading from './layout/Component/Loading';

// ICON
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import MapIcon from '@material-ui/icons/Map';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Lazy Load
const IndonesiaData = lazy(() => import('./layout/Page/IndonesiaDashboard'));
const GlobalDashboard = lazy(() => import('./layout/Page/GlobalDashboard'));
const AboutCovid = lazy(() => import('./layout/Page/AboutCovid'));
const HospitalMap = lazy(() => import('./layout/Page/HospitalMap'));
const NotFound = lazy(() => import('./layout/Component/404'));

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor:'#F5F6FA'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Menu = [
  {
    id: 1,
    name: "Indonesia Data",
    path: "/",
    icon: <HomeIcon />
  },
  {
    id: 2,
    name: "Indonesia Hospital Map",
    path: "/IdHospitalMap",
    icon: <MapIcon />
  },
  {
    id: 3,
    name: "Global Data",
    path: "/GlobalData",
    icon: <LanguageIcon />
  },
  {
    id: 4,
    name: "About COVID19",
    path: "/AboutCovid",
    icon: <InfoIcon/>
  }
]
function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {Menu.map((x, index) => (
          <ListItem key={x.path} component={Link} to={x.path}>
            <ListItemIcon>
              {x.icon}
            </ListItemIcon>
            <ListItemText primary={x.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Suspense fallback={<Loading/>}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ backgroundColor: "#E74C3C" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              PantauCovid19
            </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
        <Drawer
          className={classes.drawer}
          container={container}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
            {drawer}
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/" render={() => <IndonesiaData/>} />
            <Route path="/GlobalData" render={() => <GlobalDashboard/>} />
            <Route path="/AboutCovid" render={() => <AboutCovid/>} />
            <Route path="/IdHospitalMap"  render={() => <HospitalMap/>} />
            <Route path="" render={() => <NotFound/>} /> 
          </Switch>
        </main>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default App;
