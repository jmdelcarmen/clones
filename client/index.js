import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import routes from './router';
import reducers from './reducers';
const token = localStorage.getItem('token');
const store = applyMiddleware(thunk)(createStore)(reducers);
if (token) {
  store.dispatch({ type: 'AUTH_USER' });
  browserHistory.push('/dashboard');
}
//App entry point
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);
