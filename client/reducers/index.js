import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth/auth_reducer';
import user from './user/user_reducer';
import newsfeed from './newsfeed/newsfeed_reducer';

const rootReducer = combineReducers({
  auth, form, user, newsfeed
});

export default rootReducer;
