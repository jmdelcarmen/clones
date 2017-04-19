import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const notifSchema = new Schema({
  status: String,
  type: String,
  snippet: String
}, { timestamps: true });

export default mongoose.model('Notif', notifSchema);
