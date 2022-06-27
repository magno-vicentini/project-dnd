import { model as createModel } from 'mongoose';
import MongoModel from './MongoModels';
import ICampaign from '../interfaces/ICampaign';
import CampaignSchema from '../schemas/CampaignSchema';

class CampaignModel extends MongoModel<ICampaign> {
  constructor(model = createModel('campaign', CampaignSchema)) {
    super(model);
  }
}

export default CampaignModel;
