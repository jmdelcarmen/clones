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
      <div>
        Nav here
        <Link to="/dashboard/protected">Protected</Link>
        <button onClick={this.onLogoutUser}>Logout</button>
      </div>
    );
  }
}
export default connect(null, actions)(TopNav);
