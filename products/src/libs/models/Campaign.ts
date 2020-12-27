export interface ICampaign {
  id: string;
  productId: string;
  name: string;
}

export const Campaign = (id: string, productId: string, name: string): ICampaign => {
  return {
    id,
    productId,
    name,
  };
};
