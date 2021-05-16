import {User} from "../entities/user.entity";

export interface ReadableUserInterface extends User{
  accessToken?: string;
}