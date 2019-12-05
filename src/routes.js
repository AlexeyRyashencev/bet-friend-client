import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from "components/private-router";

/* views */
import App from './views/app';
import Login from './views/login';
import Profile from './views/profile';

export default () => (
  <Router>
    <App>
      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute path='/profile' component={Profile}/>
    </App>
  </Router>
);
