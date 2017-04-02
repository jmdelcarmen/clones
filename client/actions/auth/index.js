import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';
const URL = 'http://localhost:3000'; //node server

export function loginUser({ email, password }) {
  return dispatch => {
    axios.post(`${URL}/login`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER }); //update state for authed user
        localStorage.setItem('token', res.data.token); //store token to localStorage
        browserHistory.push('/dashboard');
      })
      .catch(err => dispatch(handleAuthError(err)));
  };
}
export function logoutUser() {
  return dispatch => {
    localStorage.removeItem('token'); //clear token from localStorage
    dispatch({ type: UNAUTH_USER }); //update state for unauthed user
    browserHistory.push('/');
  };
}
export function signUpUser(newUser) {
  return dispatch => {
    axios.post(`${URL}/signup`, newUser)
      .then(res => {
        dispatch({ type: AUTH_USER }) //auth user in auth_reducer
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(err => dispatch(handleAuthError(err)));
  };
}
export function handleAuthError(err) {
  switch (err.response.status) {
    case 401:
      return { type: AUTH_ERROR, errMessage: 'The information you\'ve entered is incorrect. Forgot password?' };
    default:
      return { type: AUTH_ERROR, errMessage: 'Email already in use.' };
  }
}
