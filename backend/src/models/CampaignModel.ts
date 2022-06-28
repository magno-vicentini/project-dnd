import { model as createModel } from 'mongoose';
import MongoModel from './MongoModels';
import ICampaign from '../interfaces/ICampaign';
import CampaignSchema from '../schemas/CampaignSchema';

class CampaignModel extends MongoModel<ICampaign> {
  constructor(model = createModel('campaign', CampaignSchema)) {
    super(model);
  }

  findCampaigns = async (user: string): Promise<ICampaign[]> => this.model.find({
    $or: [
      { userMaster: user },
      { usersCampaign: { $in: [user] } },
    ],
  });
}

export default CampaignModel;
