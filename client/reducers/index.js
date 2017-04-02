import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/auth_reducer';
import user from './auth/user_reducer';

const rootReducer = combineReducers({
  auth,
  form
});

export default rootReducer;
