import { Request, Response } from 'express';
import md5 from 'md5';
import IUser from '../interfaces/IUser';
import Controller, { RequestWithBody, ResponseError } from '.';
import UserService from '../services/UserService';

class UserController extends Controller<IUser> {
  private $route: string;

  constructor(
    service = new UserService(),
    route = '/login',
  ) {
    super(service);
    this.$route = route;
  }

  get route() { return this.$route; }

  public read = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const users = await this.service.read();

      return res.status(200).send(users);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.errors.internal });
    }
  };

  create = async (
    req: RequestWithBody<IUser>,
    res: Response<IUser | ResponseError>,
  ): Promise<typeof res> => {
    const {
      email, password, username, token,
    } = req.body;
    console.log(req.body);
    try {
      const encryptPass = md5(password);
      const findUser = await this.service.readOne({ password: encryptPass, email });
      if (findUser) {
        return res.status(409).send({ error: this.errors.alreadyExist });
      }
      const user = await this.service.create({
        password: encryptPass, email, username, token,
      });
      if (!user) {
        return res.status(500).json({ error: this.errors.internal });
      }
      return res.status(201).json(user);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req:Request,
    res: Response<IUser | ResponseError>,
  ): Promise<typeof res> => {
    const { password, email } = req.body;
    console.log(req.body);
    try {
      const encrypPass = md5(password);
      console.log(encrypPass);

      const findUser = await this.service.readOne({ password: encrypPass, email });
      console.log(findUser);
      if (!findUser) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(200).json(findUser);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default UserController;
