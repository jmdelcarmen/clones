import React from 'react'

const PostFormTopNav = ({
  setPostTypeText,
  setPostTypePhotos,
  setPostTypeVideo,
  setFormUnFocused
}) =>
  <ul>
    <li onClick={setPostTypeText}>Create a Post</li>
    <li onClick={setPostTypePhotos}>Photo Album</li>
    <li onClick={setPostTypeVideo}>Video</li>
    <li onClick={setFormUnFocused}>x</li>
  </ul>

export default PostFormTopNav;
