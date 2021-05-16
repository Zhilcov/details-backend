import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Token} from "./entities/token.entity";
import {MongoRepository, ObjectID} from "typeorm";


@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: MongoRepository<Token>,
  ){}

  async create(createUserTokenDto: Token): Promise<Token> {

    const userToken = new Token(createUserTokenDto);
    return await this.tokenRepository.save(userToken);
  }

  // async delete(uId: string, token: string): Promise<{ ok?: number, n?: number }> {
  //   return await this.tokenModel.deleteOne({ uId, token })
  // }
  //
  // async deleteAll(uId: string): Promise<{ ok?: number, n?: number }> {
  //   return await this.tokenModel.deleteMany({ uId });
  // }
  //
  async exists(uId: string, token: string): Promise<boolean> {
    // return await !!this.tokenRepository.findOne({
    //   user: uId,
    //   token: token,
    // });
    return true;
  }
}
