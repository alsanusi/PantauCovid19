import React from 'react';
import './App.css';
import GlobalDashboard from './layout/GlobalDashboard';
import IndonesiaDashboard from './layout/IndonesiaDashboard';
import AboutCovid from './layout/AboutCovid';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndonesiaDashboard}></Route>
          <Route path="/global" component={GlobalDashboard}></Route>
          <Route path="/about-covid" component={AboutCovid}></Route>
        </Switch>
      </Router>
  );
}

export default App;
