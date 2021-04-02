import {Document} from "mongoose";

export interface IUser extends Document{
  readonly id: string;
  readonly login: string;
  readonly password: string;
}