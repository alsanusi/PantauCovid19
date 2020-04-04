import React from 'react';
import './App.css';
import GlobalDashboard from './layout/GlobalDashboard';
import IndonesiaDashboard from './layout/IndonesiaDashboard';
import AboutCovid from './layout/AboutCovid';
import HospitalMap from './layout/HospitalMap';
import NotFound from './layout/Component/404';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndonesiaDashboard}></Route>
          <Route path="/global" component={GlobalDashboard}></Route>
          <Route path="/about-covid" component={AboutCovid}></Route>
          <Route path="/id-hospital-map" component={HospitalMap}></Route>
          <Route path="" component={NotFound}></Route>
        </Switch>
      </Router>
  );
}

export default App;
