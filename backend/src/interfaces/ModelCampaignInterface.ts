import ICampaign from './ICampaign';

export interface IModelCampaign {
  findCampaigns(username: string): Promise<ICampaign[]>;
}
