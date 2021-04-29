import {Document} from "mongoose";

export interface IUser extends Document{
  id: string;
  readonly login: string;
  readonly password: string;
}