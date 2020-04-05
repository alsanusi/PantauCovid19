import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Loading from './layout/Component/Loading';

const GlobalDashboard = lazy(() => import('./layout/Page/GlobalDashboard'));
const IndonesiaDashboard = lazy(() => import('./layout/Page/IndonesiaDashboard'));
const HospitalMap = lazy(() => import('./layout/Page/HospitalMap'));
const NotFound = lazy(() => import('./layout/Component/404'));

function App() {
  return (
      <Router>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact path="/" component={IndonesiaDashboard}></Route>
            <Route path="/global" component={GlobalDashboard}></Route>
            <Route path="/emergencyMap" component={HospitalMap}></Route>
            <Route path="" component={NotFound}></Route>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;