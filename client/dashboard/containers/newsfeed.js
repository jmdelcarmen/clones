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
        <PostList page={this.state.page} />
        <button onClick={this.loadMorePosts}>Load more</button>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   user: state.user
// });
// export default connect(mapStateToProps, actions)(NewsFeed);
export default connect(null, actions)(NewsFeed);
