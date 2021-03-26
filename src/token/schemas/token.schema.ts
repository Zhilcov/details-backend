import * as mongoose from "mongoose";
import {IToken} from "../interfaces/token.interface";

export const TokenSchema = new mongoose.Schema<IToken>({
  token: {type: String, required: true, unique: true},
  uId: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
  expireAt: {type: Date, required: true},
});