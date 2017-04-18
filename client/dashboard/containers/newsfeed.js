import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostForm from './post-form';
import PostList from './post-list';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }
  loadMorePosts = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  }
  render() {
    return (
      <div className="newsfeed">
        <PostForm />
        <PostList page={this.state.page} posts={this.props.newsfeed} />
        <button onClick={this.loadMorePosts}>Load more</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  newsfeed: state.newsfeed
});
export default connect(mapStateToProps, actions)(NewsFeed);
