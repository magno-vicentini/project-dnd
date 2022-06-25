import Service from '.';
import IUser from '../interfaces/IUser';
import UserModel from '../models/UserModel';

class UserService extends Service<IUser> {
  constructor(model = new UserModel()) {
    super(model);
  }

  public async read(): Promise<IUser[]> {
    const users = await this.model.read();
    return users;
  }

  public async create(userData: IUser): Promise<IUser> {
    console.log('service', userData);
    const user = await this.model.create(userData);
    return user;
  }

  public async readOne(email: string): Promise<IUser | null> {
    const user = await this.model.readOne(email);
    return user;
  }
}

export default UserService;
