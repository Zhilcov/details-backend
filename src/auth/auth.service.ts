import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignOptions } from 'jsonwebtoken';
import { TokenDto } from 'src/token/dto/token.dto';
import {SignInDto} from "./dto/signin.dto";
import {ReadableUserInterface} from "../user/interfaces/readable-user.interface";
import * as bcrypt from 'bcrypt';
import {TokenPayload} from "./interfaces/token-payload.interface";
import * as moment from 'moment';
import {UserSensitiveFieldsEnum} from "../user/enums/userSensitiveFieldsEnum";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) { }

  signUp(createUserDto: CreateUserDto) {
    return true
  }

  async signIn({login, password}: SignInDto): Promise<ReadableUserInterface> {
    const user = await this.userService.findByLogin(login);
    console.log(user);
    if (user && bcrypt.compare(password, user.password)) {
      const tokenPayload: TokenPayload = {
        _id: user.id
      };

      const token = await this.generateToken(tokenPayload);
      const expireAt = moment()
        .add(1, 'day')
        .toISOString();

      await this.saveToken({
        token,
        expireAt,
        uId: user._id,
      });

      const readableUser = user.toObject() as ReadableUserInterface;
      readableUser.accessToken = token;
      readableUser.id = user.id;


      for(let i in UserSensitiveFieldsEnum) {
        if (readableUser.hasOwnProperty(i)) {
          delete readableUser[i]
        }
      }

      return readableUser;
    }
    throw new NotFoundException('Пользователь не найден')
  }

  private async generateToken(data: TokenPayload, options?: SignOptions) : Promise<string>{
    return this.jwtService.sign(data, options);
  }

  private async verifyToken(token): Promise<any> {
    try {
      const data = this.jwtService.verify(token);
      const tokenExists = await this.tokenService.exists(data._id, token);

      if (tokenExists) {
        return data;
      }
      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  private async saveToken(createUserTokenDto: TokenDto) {
    const userToken = await this.tokenService.create(createUserTokenDto);

    return userToken;
  }
}
