import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import CampaignService from '../services/CampaignService';
import ICampaign from '../interfaces/ICampaign';

class CampaignController extends Controller<ICampaign> {
  constructor(
    service = new CampaignService(),
  ) {
    super(service);
  }

  public read = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const campaigns = await this.service.read();

      return res.status(200).send(campaigns);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.errors.internal });
    }
  };

  create = async (
    req: RequestWithBody<ICampaign>,
    res: Response<ICampaign | ResponseError>,
  ): Promise<typeof res> => {
    console.log(req.body);
    const { campaignName, userMaster } = req.body;
    try {
      const findCampaign = await this.service.readOne({ campaignName, userMaster });
      if (findCampaign) {
        return res.status(409).send({ error: this.errors.alreadyExist });
      }
      const user = await this.service.create(req.body);
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
    res: Response<ICampaign | ResponseError>,
  ): Promise<typeof res> => {
    const { campaignName, userMaster } = req.body;
    console.log(req.body);
    try {
      const findCampaign = await this.service.readOne({ campaignName, userMaster });
      console.log(findCampaign);
      if (!findCampaign) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(200).json(findCampaign);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CampaignController;
