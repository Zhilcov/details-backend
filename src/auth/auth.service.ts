import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignOptions } from 'jsonwebtoken';
import { TokenDto } from 'src/token/dto/token.dto';
import { SignInDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { TokenPayload } from './interfaces/token-payload.interface';
import * as moment from 'moment';
import { UserSensitiveFieldsEnum } from '../user/enums/userSensitiveFieldsEnum';
import { ReadableUserInterface } from '../user/interfaces/readable-user.interface';
import { Token } from '../token/entities/token.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async signUp(dto: CreateUserDto): Promise<boolean> {
    // const { login } = dto;
    // const user = await this.userService.findByLogin(login);
    // if (user) {
    //   throw new HttpException(
    //     'Пользователь с таким логином уже существует',
    //     HttpStatus.FOUND,
    //   );
    // }

    return true;
  }

  async signIn({ login, password }: SignInDto): Promise<ReadableUserInterface> {
    const user = await this.userService.findByLogin(login);
    if (user && (await bcrypt.compare(password, user.password))) {
      const tokenPayload: TokenPayload = {
        _id: user.id.toString(),
      };

      const token = await this.generateToken(tokenPayload);
      const expireAt = moment().add(1, 'day').toISOString();

      await this.saveToken({
        token,
        expireAt,
        userId: user.id,
      });

      const readableUser = { ...user } as ReadableUserInterface;
      readableUser.accessToken = token;
      readableUser.expireAt = expireAt;

      for (const i in UserSensitiveFieldsEnum) {
        if (readableUser.hasOwnProperty(i)) {
          delete readableUser[i];
        }
      }

      return readableUser;
    }
    throw new NotFoundException('Неверный логин или пароль');
  }

  private async generateToken(
    data: TokenPayload,
    options?: SignOptions,
  ): Promise<string> {
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
