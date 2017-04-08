import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  body: String,
  snippet: String
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
