import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/signUp')
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<boolean> {
    return this.authService.signUp(createUserDto);
  }
}
