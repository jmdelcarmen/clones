import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sex: '',
      birthday: {
        month: '',
        day: '',
        year: ''
      }
    };
  }
  onSignUp = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, confirmEmail, password, month, day, year } = this.refs;
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      birthday: {
        month: month.value,
        day: day.value,
        year: year.value
      }
    };
    this.setState(newUser);
    this.props.signUpUser(newUser);
  }
  onChangeSex = (e) => {
    this.setState({ sex: e.target.value });
  }
  render() {
    return (
      <div className="signup">
        <h1>Create a New Account</h1>
        <span>Its free and always will be</span>
        <form onSubmit={this.onSignUp}>
          <div className="form-group">
            <input ref="firstName" type="text" placeholder="First name" className="form-control"/>
            <input ref="lastName" type="text" placeholder="Last name" className="form-control"/>
          </div>
          <div className="form-group">
            <input ref="email" type="text" placeholder="Mobile number or email" className="form-control"/>
            <input ref="confirmEmail" type="text" placeholder="Re-enter email" className="form-control"/>
          </div>
          <div className="form-group">
            <input ref="password" type="password" placeholder="New password" className="form-control" />
          </div>
          <div className="form-group bday">
            <label>Birthday</label>
            <select ref="month" id="month">
              <option>Month</option>
              <option>Feb</option>
            </select>
            <select ref="day" id="day">
              <option>Day</option>
              <option>1</option>
            </select>
            <select ref="year" id="year">
              <option>Year</option>
              <option>1995</option>
            </select>
          </div>
          <div className="form-group sex">
          <label>
            <input
              onChange={this.onChangeSex}
              name="sex"
              value="female"
              type="radio" />
            <span>Female</span>
          </label>
          <label>
            <input
              onChange={this.onChangeSex}
              name="sex"
              value="male"
              type="radio" />
            <span>Male</span>
          </label>
          </div>
          <span>Terms and conditions...</span>
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
