import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostItem from './post-item';

class PostList extends Component {
  renderPostList() {
    return ['post1', 'post2', 'post3'].map(post => <PostItem key={post} post={post} />)
  }

  render() {
    return (
      <div>
        <h1>Post List</h1>
        <ul>
          {this.renderPostList()}
        </ul>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   newsFeed: state.newsFeed,
//   user: state.user
// });
// export default connect(mapStateToProps, actions)(PostList);
export default connect(null, actions)(PostList);
