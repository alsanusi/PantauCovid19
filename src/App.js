import React from 'react';
import './App.css';
import Dashboard from './layout/Dashboard';
import Card from './layout/Card';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about-me" component={Card} />
        </Switch>
      </Router>
  );
}

export default App;
