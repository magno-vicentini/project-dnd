import CustomRouter from './routes';
import App from './app';
import UserController from './controllers/UserController';
import IUser from './interfaces/IUser';

const server = new App();

const userController = new UserController();

const userRouter = new CustomRouter<IUser>();
userRouter.addRoute(userController);

server.addRouter(userRouter.router);

export default server;
