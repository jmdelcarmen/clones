import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostForm from './post-form';
import PostList from './post-list';

class NewsFeed extends Component {
  render() {
    return (
      <div className="newsfeed">
        <PostForm />
        <PostList />
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   newsFeed: state.newsFeed,
//   user: state.user
// });
// export default connect(mapStateToProps, actions)(NewsFeed);
export default connect(null, actions)(NewsFeed);
