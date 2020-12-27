import { IProduct } from "../models/Product";
import { ICampaignService } from "./CampaignService";

export class ProductService {
  private campaignService: ICampaignService;

  constructor(campaignService: ICampaignService) {
    this.campaignService = campaignService;
  }

  getProducts(): IProduct[] {
    return [];
  }

  getProduct(id: string): IProduct | void {}

  // This is where it got tricky, connected logic
  getOffer(id: string) {
    const product = this.getProduct(id);
    const campaign = this.campaignService.getCampaignByProductId(id);

    return { product, campaign };
  }
}
