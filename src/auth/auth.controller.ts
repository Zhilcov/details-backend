import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {ReadableUserInterface} from "../user/interfaces/readable-user.interface";
import {SignInDto} from "./dto/signin.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/signUp')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
    return this.authService.signUp(createUserDto);
  }

  @Post('/signIn')
  async signIn(@Body(new ValidationPipe()) signInDto: SignInDto): Promise<ReadableUserInterface> {
    return this.authService.signIn(signInDto);
  }
}
