import { Schema } from 'mongoose';
import IUser from '../interfaces/IUser'


export const UserSchema = new Schema<IUser>({
  email: { type: String, required: true },
  name: { type: String, required: false }
});
