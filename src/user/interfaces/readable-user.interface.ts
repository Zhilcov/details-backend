import {User} from "../user.entity";

export interface ReadableUserInterface extends User{
  accessToken?: string;
}