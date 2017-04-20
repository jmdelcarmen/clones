import React from 'react'

const PostFormTopNav = ({
  setPostTypeText,
  setPostTypePhotos,
  setPostTypeVideo,
  setFormUnFocused,
  isFormFocused
}) =>
  <ul className="post-form-top-nav">
    <li onClick={setPostTypeText}>
      <i className="fa fa-edit"></i>
      Create a Post |
    </li>
    <li onClick={setPostTypePhotos}>
      <i className="fa fa-image"></i>
      Photo Album |
    </li>
    <li onClick={setPostTypeVideo}>
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
