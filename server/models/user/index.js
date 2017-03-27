import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const validateEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
const UserSchema = mongoose.Schema({
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
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date }
});

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  console.log('Password hashed', this.password);
  next();
});

export default mongoose.model('User', UserSchema);