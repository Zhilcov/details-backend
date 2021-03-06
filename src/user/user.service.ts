import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(createUserDto.password, salt);

    const createdUser = new User(_.assignIn(createUserDto, { password: hash }));

    return await this.usersRepository.save(createdUser)
  }

  async find(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async findByLogin(login: string): Promise<User> {
    return await this.usersRepository.findOne({
      login: login
    });
  }
}
