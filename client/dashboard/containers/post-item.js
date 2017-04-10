import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

class PostItem extends Component {
  render() {
    return (
      <li>{this.props.post}</li>
    );
  }
}
// const mapStateToProps = state => ({
//   newsFeed: state.newsFeed,
//   user: state.user
// });
// export default connect(mapStateToProps, actions)(PostItem);
export default connect(null, actions)(PostItem);
