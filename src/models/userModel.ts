import { IUser } from '../interfaces/user';
import  mongoose, { Schema } from 'mongoose';

const userSchema: Schema<IUser> = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
});

export const User = mongoose.model<IUser>('User', userSchema);
