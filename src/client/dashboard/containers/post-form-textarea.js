import React from 'react';

const PostFormTextArea = ({
  onFocus,
  onChange,
  value
}) =>
  <textarea
    className="post-form-textarea"
    placeholder="What's on your mind?"
    onChange={onChange}
    onFocus={onFocus}
    value={value}>
  </textarea>

export default PostFormTextArea;
