import { Schema, Document } from 'mongoose';
import IUser from '../interfaces/IUser';

export interface UserDocument extends IUser, Document {}

const UserSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: false },
  password: { type: String, required: true },
  token: { type: String, required: false },
}, { versionKey: false });

export default UserSchema;
