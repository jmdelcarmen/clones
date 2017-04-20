import React from 'react'

const PostFormBottomNav = ({
  setOnlyMeVisiblity,
  setPublicVisibility,
  setFriendsOnlyVisibility,
  visibility,
  submitPost,
  isFormFocused
}) => isFormFocused ?
  <ul className="post-form-bottom-nav">
    <li>
        <span>Who should see this?</span>
        <a onClick={setPublicVisibility}>Public</a>
        <a onClick={setFriendsOnlyVisibility}>Friends</a>
        <a onClick={setOnlyMeVisiblity}>Only me</a>
    </li>
    <li><button>Post</button></li>
  </ul> : <div></div>

export default PostFormBottomNav;
