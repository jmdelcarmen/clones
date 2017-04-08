import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const convoSchema = new Schema({
  users: [{ type: Schema.ObjectId, ref: 'User' }],
  messages: [{ type: Schema.ObjectId, ref: 'Message' }]
}, { timestamps: true });

export default mongoose.model('Convo', convoSchema);
