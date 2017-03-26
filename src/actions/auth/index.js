import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  GET_USER,
  CLEAR_USER
} from './types';

const URL = 'http://localhost:3000'; //node server

export function loginUser({ email, password }) {
  return dispatch => {
    axios.post(`${URL}/login`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER }); //update state for authed user
        localStorage.setItem('token', res.data.token); //store token to localStorage
        return () => {
          dispatch({ type: GET_USER, payload: res.data.user }); //cache user to store
          const { firstName, lastName } = res.data.user;
          browserHistory.push(`/usr/${firstName}${lastName}`);
        };
      })
      .catch(err => dispatch(handleAuthError(err)));
  };
}
export function logoutUser() {
  return dispatch => {
    localStorage.removeItem('token'); //clear token from localStorage
    dispatch({ type: UNAUTH_USER }); //update state for unauthed user
    return () => {
      dispatch({ type: CLEAR_USER });
      browserHistory.push('/');
    };
  };
}
export function signUpUser(newUser) {
  return dispatch => {
    axios.post(`${URL}/signup`, newUser)
      .then(res => {
        dispatch({ type: AUTH_USER }); //auth user in auth_reducer
        localStorage.setItem('token', res.data.token);
        return () => {
          dispatch({ type: GET_USER, payload: res.data.user }); //cache user to store
          const { firstName, lastName } = res.data.user;
          browserHistory.push(`/usr/${firstName}${lastName}`);
        };
      })
      .catch(err => dispatch(handleAuthError(err)));
  };
}
export function handleAuthError(err) {
  return {
    type: AUTH_ERROR,
    errMessage: err
  };
}
