import React from 'react';
import './App.css';
import GlobalDashboard from './layout/GlobalDashboard';
import IndonesiaDashboard from './layout/IndonesiaDashboard';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={GlobalDashboard} />
          <Route path="/indonesia" component={IndonesiaDashboard} />
        </Switch>
      </Router>
  );
}

export default App;
