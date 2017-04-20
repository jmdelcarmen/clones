import React from 'react'

const PostFormTopNav = ({
  setPostTypeText,
  setPostTypePhotos,
  setPostTypeVideo,
  setFormUnFocused,
  isFormFocused,
  postType
}) =>
  <ul className="post-form-top-nav">
    <li
      className={postType === 'text' ? 'active' : ''}
      onClick={setPostTypeText}>
      <i className="fa fa-edit"></i>
      Create a Post
    </li>
    |
    <li
      className={postType === 'photos' ? 'active' : ''}
      onClick={setPostTypePhotos}>
      <i className="fa fa-image"></i>
      Photo Album
    </li>
    |
    <li
      className={postType === 'video' ? 'active' : ''}
      onClick={setPostTypeVideo}>
      <i className="fa fa-video-camera"></i>
      Video
    </li>
    {renderExitForm(isFormFocused, setFormUnFocused)}
  </ul>

const renderExitForm = (isFormFocused, setFormUnFocused) => isFormFocused ?
  <li onClick={setFormUnFocused}>
    <i className="fa fa-times"></i>
  </li> : <div></div>

export default PostFormTopNav;
