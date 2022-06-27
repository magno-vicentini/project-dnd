import { Schema, Document } from 'mongoose';
import ICampaign from '../interfaces/ICampaign';

export interface CampaignDocument extends ICampaign, Document {}

const CampaingSchema = new Schema<CampaignDocument>({
  campaignName: { type: String, required: true },
  userMaster: { type: String, required: true },
  usersCampaign: { type: [String], required: false },
}, { versionKey: false });

export default CampaingSchema;
