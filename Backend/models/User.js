import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  confirmPassword:Number,
   avatar: String,
});



 export const UserModel = mongoose.model('User', userSchema);

