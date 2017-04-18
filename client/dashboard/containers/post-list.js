import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostItem from './post-item';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPostList(page) {
    return this.props.newsfeed.slice(0, 10 * page).map(post => <PostItem key={post._id} post={post} />);
  }
  render() {
    return (
      <div>
        <h1>Post List</h1>
        <ul>
          {this.renderPostList(this.props.page)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  newsfeed: state.newsfeed
});
export default connect(mapStateToProps, actions)(PostList);
