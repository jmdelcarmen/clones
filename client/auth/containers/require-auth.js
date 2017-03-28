import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      !this.props.authenticated ? browserHistory.push('/login') : null
    }
    componentWillUpdate(props) {
      //new props are passed to this method
      !props.authenticated ? browserHistory.push('/login') : null
    }
    //authed
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
  });
  return connect(mapStateToProps)(Authentication);
}
