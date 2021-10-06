import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;