import { Router } from 'express';
import UserController from '../controllers/UserController';

const routes = Router();

const userController = new UserController();

routes.get('/login', userController.getUsers);
routes.post('/signup', userController.create);
export default routes;
