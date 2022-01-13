import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Token } from "./entities/token.entity";
import { Repository} from "typeorm";
import {TokenDto} from "./dto/token.dto";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";


@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
  ){}

  async create(createUserTokenDto: TokenDto): Promise<Token> {

    const userToken = new Token(createUserTokenDto);
    return await this.tokenRepository.save(userToken);
  }

  async delete(uId: string, token: string): Promise<DeleteResult> {
      return this.tokenRepository.delete({
        userId: uId,
        token: token
      });
  }

  async deleteAll(uId: string): Promise<DeleteResult> {
    return await this.tokenRepository.delete({
      userId: uId,
    });
  }

  async exists(uId: string, token: string): Promise<boolean> {
    return await !!this.tokenRepository.findOne({
      userId: uId,
      token: token,
    });
  }
}
