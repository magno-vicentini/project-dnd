import { model as createModel } from 'mongoose';
import UserSchema from '../schemas/UserSchema';
import IUser from '../interfaces/IUser';
import MongoModel from './MongoModels';

class UserModel extends MongoModel<IUser> {
  constructor(model = createModel('users', UserSchema)) {
    super(model);
  }
}

export default UserModel;
