import React from 'react';
import LoginForm from '../containers/login';
import { Link } from 'react-router';

export default () => (
  <div className="auth-header">
    <h1>
      <Link to="/">fakebook</Link>
    </h1>
    <LoginForm />
  </div>
);

// <img src="./client/imgs/facebook-logo-preview.png" alt="fb-logo-preview"/>
