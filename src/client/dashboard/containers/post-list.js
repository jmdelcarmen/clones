import React, { Component } from 'react';
import PostItem from './post-item';

const renderPostList = (page, posts) => posts.slice(0, 10 * page).map(post => <PostItem key={post._id} post={post} />);
const PostList = ({ page, posts }) => (
  <div>
    <h1>Post List</h1>
    <ul>
      {renderPostList(page, posts)}
    </ul>
  </div>
);
export default PostList;
