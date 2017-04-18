import {
  CREATE_POST,
  FETCH_POSTS
} from '../../actions/dashboard/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;
    case CREATE_POST:
      return [...state, action.post];
  }
  return state;
}
