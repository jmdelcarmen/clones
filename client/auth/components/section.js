import React from 'react';
import SignUp from '../containers/signup';
import RecentLogin from '../containers/recent-login';

export default () => (
  <div className="auth-section">
    <RecentLogin />
    <SignUp />
  </div>
);
