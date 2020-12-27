import { ProductService } from "./ProductService";
import { CampaignService } from "./CampaignService";
import { UserService } from "./UserService";

export const userService = new UserService();
export const campaignService = new CampaignService();
export const productService = new ProductService(campaignService);
