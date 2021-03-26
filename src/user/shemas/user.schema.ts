import * as mongoose from 'mongoose';
import {IUser} from "../interfaces/user.interface";

export const UserSchema = new mongoose.Schema<IUser>({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});