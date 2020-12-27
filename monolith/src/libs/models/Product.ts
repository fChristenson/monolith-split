export interface IProduct {
  id: string;
  name: string;
}

export const Product = (id: string, name: string): IProduct => {
  return {
    id,
    name,
  };
};
