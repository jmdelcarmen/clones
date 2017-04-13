import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  CREATE_POST,
  FETCH_POSTS
} from './types';

const URL = 'http://localhost:3000'; //node server

export function createPost(post) {
  return (dispatch, getState) => {
    axios.post(`${URL}/dashboard/createpost`, { userId: getState().user._id, post })
      .then(
        res => {
          dispatch({ type: CREATE_POST, post: res.data.post });
        },
        err => {
          console.log(err);
        }
      );
  };
}
export function fetchPosts() {
  return dispatch => {
    axios.get(`${URL}/dashboard/fetchposts`)
      .then(
        res => {
          dispatch({ type: FETCH_POSTS, posts: res.data.posts });
        },
        err => {
          console.log(err);
        }
      );
  };
}
