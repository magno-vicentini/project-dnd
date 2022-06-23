import { Schema } from 'mongoose';
import IUser from '../interfaces/IUser';

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: false },
}, { versionKey: false });

export default UserSchema;
