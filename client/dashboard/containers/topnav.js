import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Link } from 'react-router';

class TopNav extends Component {
  onLogoutUser = () => {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="dashboard-nav">
        <div className="nav-wrapper">
          <form>
            <div className="fb-inverse-mini"></div>
            <input type="text" placeholder="Search for people, places and things" />
          </form>
          <ul className="nav-list">
            <li><i className="fa fa-users"></i></li>
            <li><i className="fa fa-comment"></i></li>
            <li><i className="fa fa-globe"></i></li>
            <li className="profile-dropdown"><i className="fa fa-question-circle"></i></li>
            <li><i className="fa fa-sort-down"></i></li>
          </ul>
        </div>

      </div>
    );
  }
}
export default connect(null, actions)(TopNav);

// <li><button onClick={this.onLogoutUser}>Logout</button></li>
