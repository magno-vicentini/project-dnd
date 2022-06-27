import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const campaignRouter = Router();

const campaignController = new CampaignController();

campaignRouter.get('/', async (req, res) => campaignController.read(req, res));

campaignRouter.post('/', async (req, res) => campaignController.readOne(req, res));

campaignRouter.post(
  '/create',
  async (req, res) => campaignController.create(req, res),
);

export default campaignRouter;
