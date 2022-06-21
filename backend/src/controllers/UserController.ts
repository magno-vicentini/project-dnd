import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  constructor(private userService = new UserService()) {}

  notFound = 'User not found';

  internalError: 'Internal server error';

  public getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.userService.getUsers();

      return res.status(200).send(users);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).send(user);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.notFound });
    }
  };
}

export default UserController;
