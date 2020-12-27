export interface IUser {
  id: string;
  name: string;
}

export const User = (id: string, name: string): IUser => {
  return {
    id,
    name,
  };
};
