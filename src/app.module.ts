import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { TokenModule } from './token/token.module';
import {configModule} from "./config/config.module";
import {SeedsModule} from "./db/seed.module";
import {User} from "./user/user.entity";
import {Token} from "./token/token.entity";


@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_WRITE_CONNECTION_STRING,
      entities: [
        User, Token
      ],
      synchronize: true,
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    // MongooseModule.forRoot(
    //   process.env.MONGODB_WRITE_CONNECTION_STRING,
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    //   }
    // ),
    TokenModule,
    SeedsModule,
  ],
})
export class AppModule {}
