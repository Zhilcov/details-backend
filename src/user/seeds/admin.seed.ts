import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import {UserService} from "../user.service";

@Injectable()
export class AdminSeeder {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Command({ command: 'create:admin', describe: 'create a admin', autoExit: true })
  async create() {
    const user = await this.userService.create({
      login: 'a',
      password: '123456'
    });
    console.log(user);
  }
}