import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: String,
  likes: Number,
  snippet: String,
  private: { type: Boolean, default: false },
  timeline: { type: Schema.ObjectId, ref: 'User' },
  comments: [{ type: Schema.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
