import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app';
import Auth from './auth/app';
import Dashboard from './dashboard/app';

//All navigations happens here, import all components here
export default (
    <Route path="/" component={App}>
      <Route path="login" component={Auth} />
      <Route path="dashboard" component={Dashboard} />
    </Route>
);
