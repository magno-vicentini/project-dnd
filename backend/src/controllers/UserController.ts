import { Request, Response } from 'express';
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

  public read = async (req: Request, res: Response): Promise<Response> => {
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
    const { body } = req;
    try {
      const user = await this.service.create(body);
      if (!user) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in user) {
        return res.status(400).json(user);
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
    const { id } = req.params;
    try {
      const findCar = await this.service.readOne(id);
      if (!findCar) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(200).json(findCar);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default UserController;
