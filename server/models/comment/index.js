import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  likes: Number,
  body: String,
  snippet: String,
  owner: { type: Schema.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
