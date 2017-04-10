import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostList from './post-list';

class PostForm extends Component {
  onSubmitPost = (e) => {
    console.info('submitting a post');
  }
  render() {
    return (
        <div>
          <form>
            <label>New Post</label>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}
// const mapStateToProps = state => ({
//   newsFeed: state.newsFeed,
//   user: state.user
// });
// export default connect(mapStateToProps, actions)(PostForm);
export default connect(null, actions)(PostForm);
