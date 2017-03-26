import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app';
import Auth from './auth/app';

//All navigations happens here, import all components here
export default (
    <Route path="/" component={App}>
      <Route path="auth" component={Auth} />
    </Route>
);
