import { User, Post } from '../../models';
export default (app) => {
  app.get('/dashboard/fetchposts', fetchPosts);
  app.post('/dashboard/createpost', createPost);
  return app;
}

export function createPost(req, res) {
  const { userId, post } = req.body;
  const savePost = new Post(post).save();
  savePost
  .then(newPost => {
    User.findByIdAndUpdate(userId, { $push: { 'posts': newPost._id } }, { new: true } ).populate('posts')
    .then(user => {
      res.json({ post: newPost, user });
    });
  },
  err => {
    res.send(new Error('Failed to create post.'));
  });
}
export function fetchPosts(req, res) {
  Post.find({}).limit(10).then(posts => res.json({ posts }));
}
