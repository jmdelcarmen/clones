import {
  GET_USER,
  CLEAR_USER
} from '../../actions/auth/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.payload};
    case CLEAR_USER:
      return {...state, user: null}
  }
  return state;
}
