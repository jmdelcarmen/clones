import React from 'react'

const PostFormBottomNav = ({
  setOnlyMeVisiblity,
  setPublicVisibility,
  setFriendsOnlyVisibility,
  visibility,
  submitPost,
  isFormFocused
}) => isFormFocused ?
  <ul>
    <li>
      <p>Who should see this?</p>
        <a onClick={setPublicVisibility}>Public</a>
        <a onClick={setFriendsOnlyVisibility}>Friends</a>
        <a onClick={setOnlyMeVisiblity}>Only me</a>
    </li>
    <li><button>Post</button></li>
  </ul> : <div></div>

export default PostFormBottomNav;
