import { combineReducers } from 'redux';
import auth from './auth/auth_reducer';
import user from './auth/user_reducer';

const rootReducer = combineReducers({
  auth,
  user
});

export default rootReducer;
