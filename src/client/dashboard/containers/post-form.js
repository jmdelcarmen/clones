import React, { Component } from 'react';
import actions from '../../actions';
import { connect } from 'react-redux';

import PostList from './post-list';
import PostFormTopNav from './post-form-top-nav';
import PostFormBottomNav from './post-form-bottom-nav';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState()
  }
  resetForm = () => this.setState(this.initialState);
  initialState = () => ({
    body: '',
    snippet: '',
    visibility: 'public',
    type: 'text',
    active: false,
    photos: [],
    video: null,
  });
  onCreatingPost = (e) => {
    e.preventDefault();
    const body = e.target.value;
    this.setState({ body, snippet: body.slice(0, 101), type: 'text' });
  }
  onSubmitPost = (e) => {
    e.preventDefault();
    const { body, snippet, visibility, type } = this.state;
    if (body.length > 0 && type === 'text') {
      this.props.createPost({ body, snippet, visibility, type });
      this.resetForm();
    }
  }
  //PostFormTopNav
  setPostTypeText = () => this.setState({ type: 'text', video: null, photos: [] });
  setPostTypeVideo = () => this.setState({ type: 'video', photos: [] });
  setPostTypePhotos = () => this.setState({ type: 'photos', video: null });
  //PostFormBottomNav
  setPublicVisibility = () => this.setState({ visibility: 'public' });
  setFriendsOnlyVisibility = () => this.setState({ visibility: 'friends only' });
  setOnlyMeVisiblity = () => this.setState({ visibility: 'only me' });
  setFormUnFocused = () => this.setState({ active: false });
  render() {
    return (
        <div>
          <form onSubmit={this.onSubmitPost}>
            <PostFormTopNav
              setFormUnFocused={this.setFormUnFocused}
              setPostTypeText={this.setPostTypeText}
              setPostTypeVideo={this.setPostTypeVideo}
              setPostTypePhotos={this.setPostTypePhotos}/>
            <textarea
              onFocus={() => this.setState({ active: true })}
              onChange={this.onCreatingPost}
              value={this.state.body}>
            </textarea>
            <PostFormBottomNav
              isFormFocused={this.state.active}
              setOnlyMeVisiblity={this.setOnlyMeVisiblity}
              setFriendsOnlyVisibility={this.setFriendsOnlyVisibility}
              setPublicVisibility={this.setPublicVisibility}
              visibility={this.state.visibility}/>
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
