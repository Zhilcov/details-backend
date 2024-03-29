import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ReadableUserInterface } from '../user/interfaces/readable-user.interface';
import { SignInDto } from './dto/signin.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  async signUp(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<boolean> {
    return this.authService.signUp(createUserDto);
  }

  @Post('/sign-in')
  async signIn(
    @Body(ValidationPipe) signInDto: SignInDto,
  ): Promise<ReadableUserInterface> {
    return this.authService.signIn(signInDto);
  }
}
