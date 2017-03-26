import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  onUsernameChange = (e) => {
    e.preventDefault();
    const username = e.target.value;
    this.setState({ username });
    console.log(username);
  }
  onPasswordChange = (e) => {
    e.preventDefault();
    const password = e.target.value;
    this.setState({ password });
    console.log(password);
  }
  onLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
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
