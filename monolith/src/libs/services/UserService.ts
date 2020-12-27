import { IUser } from "../models/User";

export class UserService {
  getUsers(): IUser[] {
    return [];
  }

  getUser(id: string): IUser | void {}
}
