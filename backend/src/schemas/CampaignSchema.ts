import { Schema } from 'mongoose';
import ICampaign from '../interfaces/ICampaign';

const CampaingSchema = new Schema<ICampaign>({
  campaignName: { type: String, required: true },
  userMaster: { type: String, required: true },
  usersCampaign: { type: [String], required: false },
}, { versionKey: false });

export default CampaingSchema;
