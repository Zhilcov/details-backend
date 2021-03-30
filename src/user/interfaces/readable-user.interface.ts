import {IUser} from "./user.interface";

export interface ReadableUserInterface extends IUser{
  accessToken?: string;
}