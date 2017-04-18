import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

class PostItem extends Component {
  render() {
    return (
      <li>{this.props.post.body}</li>
    );
  }
}
export default connect(null, actions)(PostItem);
