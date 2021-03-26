import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IToken} from "./interfaces/token.interface";
import {TokenDto} from "./dto/token.dto";


@Injectable()
export class TokenService {
  constructor(@InjectModel('Token') private readonly tokenModel: Model<IToken>) { }

  async create(createUserTokenDto: TokenDto): Promise<IToken> {
    const userToken = new this.tokenModel(createUserTokenDto);
    return await userToken.save()
  }

  async delete(uId: string, token: string): Promise<{ ok?: number, n?: number }> {
    return await this.tokenModel.deleteOne({ uId, token })
  }

  async deleteAll(uId: string): Promise<{ ok?: number, n?: number }> {
    return await this.tokenModel.deleteMany({ uId });
  }

  async exists(uId: string, token: string): Promise<boolean> {
    return await this.tokenModel.exists({ uId, token });
  }
}
