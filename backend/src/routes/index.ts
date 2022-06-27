import { Router } from 'express';
import campaignRouter from './campaignRouter';
import loginRouter from './loginRouter';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/campaign', campaignRouter);
export default routes;
