import { Router } from 'express';
import LoginController from '../controllers/UserController';
import createToken from '../middlewares/createToken';

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.get('/', async (req, res) => loginController.read(req, res));

loginRouter.post('/', async (req, res) => loginController.readOne(req, res));

loginRouter.post(
  '/signup',
  createToken,
  async (req, res) => loginController.create(req, res),
);

export default loginRouter;
