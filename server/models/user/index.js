import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const validateEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: 'Email is required',
    validate: [validateEmail, 'Invalid email']
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    firstName: String,
    lastName: String,
    sex: String,
    birthday: {
      month: String,
      day: Number,
      year: Number
    }
  },
  friends: [{ type: Schema.ObjectId, ref: 'User' }],
  posts: [{ type: Schema.ObjectId, ref: 'Post' }],
  notifications: [{ type: Schema.ObjectId, ref: 'Notification' }],
  groups: [{ type: Schema.ObjectId, ref: 'Group' }],
  messages: [{ type: Schema.ObjectId, ref: 'Message' }]
}, { timestamps: true });

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

export default mongoose.model('User', UserSchema);
