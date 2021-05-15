import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./user.entity";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post('create-user')
  async create(@Body(ValidationPipe) user: CreateUserDto): Promise<User> {
    return await this.userService.create({
      login: user.login,
      password: user.password
    });

  }
}
