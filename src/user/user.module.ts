import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserSchema} from "./shemas/user.schema";


@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MongooseModule.forFeature([
    {name: 'User', schema: UserSchema}
  ])]
})
export class UserModule {
}
