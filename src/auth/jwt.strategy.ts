import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { TokenService } from 'src/token/token.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('jwtSecret'),
      passReqToCallback: true,
    });
  }

  async validate(req, user: Partial<User>) {
    const token = req.headers.authorization.slice(7);
    const tokenExists = await this.tokenService.exists(user.id, token);
    if (tokenExists) {
      return user;
    } else {
      console.log(232323);
      throw new UnauthorizedException();
    }
  }
}
