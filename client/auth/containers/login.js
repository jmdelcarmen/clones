import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  onUsernameChange = (e) => {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email });
  }
  onPasswordChange = (e) => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({ password });
  }
  onLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onLogin}>
          <div>
            <label>Email or Phone</label>
            <input
              name="email"
              type="text"
              onChange={this.onUsernameChange}
              />
          </div>
          <div>
            <label>Password</label>
            <input
            name="password"
            type="password"
            onChange={this.onPasswordChange}
            />
          </div>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
export default connect(null, actions)(LoginForm);
