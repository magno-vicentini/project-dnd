import Service from '.';
import ICampaign from '../interfaces/ICampaign';
import CampaignModel from '../models/CampaignModel';

class CampaignService extends Service<ICampaign> {
  constructor(model = new CampaignModel()) {
    super(model);
  }

  public async read(): Promise<ICampaign[]> {
    const campaigns = await this.model.read();
    return campaigns;
  }

  // public async findCampaigns(username: string): Promise<ICampaign[]> {
  //   const campaigns = await this.model.findCampaigns(username);
  //   return campaigns;
  // }

  public async create(userData: ICampaign): Promise<ICampaign> {
    console.log('service', userData);
    const user = await this.model.create(userData);
    return user;
  }

  public async readOne(obj: object): Promise<ICampaign | null> {
    const user = await this.model.readOne(obj);
    return user;
  }
}

export default CampaignService;
