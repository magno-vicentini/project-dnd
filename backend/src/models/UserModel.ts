import { model as createModel } from 'mongoose';
import { UserSchema } from '../schemas/UserSchema';
import IUser from '../interfaces/IUser';


class UserModel {
 
  constructor(private userModel = createModel<IUser>('users', UserSchema)) {}

  public async getUsers(): Promise<IUser[]> {
    const users = await this.userModel.find();
    return users;
  }

  public async createUser(userData: object): Promise<IUser> {
    const user = await this.userModel.create(userData);
    return user;
  }
}

export default UserModel;