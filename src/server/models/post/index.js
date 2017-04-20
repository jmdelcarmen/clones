import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: String,
  likes: Number,
  type: String,
  snippet: String,
  visibility: String,
  timeline: { type: Schema.ObjectId, ref: 'User' },
  comments: [{ type: Schema.ObjectId, ref: 'Comment' }],
  tags: [{ type: Schema.ObjectId, ref: 'user'}]
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
