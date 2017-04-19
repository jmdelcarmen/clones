import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostList from './post-list';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      snippet: '',
      private: false
    };
  }
  onCreatingPost = (e) => {
    e.preventDefault();
    const body = e.target.value;
    this.setState({ body, snippet: body.slice(0, 101) });
  }
  onSubmitPost = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    const { newsfeed, user } = this.props;
    this.setState({ body: '', snippet: '' });
  }
  render() {
    return (
        <div>
          <form onSubmit={this.onSubmitPost}>
            <label>New Post</label>
            <input onChange={this.onCreatingPost} value={this.state.body} type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  newsfeed: state.newsfeed,
  user: state.user
});
export default connect(mapStateToProps, actions)(PostForm);
