import { ICampaign } from "../models/Campaign";

export interface ICampaignService {
  getCampaigns(): ICampaign[];
  getCampaign(id: string): ICampaign | void;
  getCampaignByProductId(id: string): ICampaign | void;
}
