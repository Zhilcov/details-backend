import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { MongooseModule } from '@nestjs/mongoose';
import { TokenModule } from './token/token.module';
import {configModule} from "./config/config.module";
import {SeedsModule} from "./db/seed.module";


@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    MongooseModule.forRoot(
      process.env.MONGODB_WRITE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    TokenModule,
    SeedsModule,
  ],
})
export class AppModule {}
