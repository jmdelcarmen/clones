import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import routes from './router';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//App entry point
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);