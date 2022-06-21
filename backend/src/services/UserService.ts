import IUser from '../interfaces/IUser';
import UserModel from '../models/UserModel';

class UserService {
  constructor(private userModel = new UserModel()) {}

  public async getUsers(): Promise<IUser[]> {
    const users = await this.userModel.getUsers();
    return users;
  }

  public async createUser(userData: object): Promise<IUser> {
    console.log('service', userData);
    const user = await this.userModel.createUser(userData);
    return user;
  }
}

export default UserService;
