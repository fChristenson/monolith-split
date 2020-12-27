import { ICampaign } from "../models/Campaign";

export class CampaignService {
  getCampaigns(): ICampaign[] {
    return [];
  }

  getCampaign(id: string): ICampaign | void {}

  getCampaignByProductId(id: string): ICampaign | void {}
}
