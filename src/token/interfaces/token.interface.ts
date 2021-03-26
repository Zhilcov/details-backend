import {Document} from "mongoose";

export interface IToken extends Document {
  token: string;
  uId: string;
  expireAt: Date;
}