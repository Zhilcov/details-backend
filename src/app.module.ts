import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';

import { TokenModule } from './token/token.module';
import {configModule} from "./config/config.module";
import {SeedsModule} from "./db/seed.module";
import { CarModule } from './car/car.module';
import { DetailModule } from './detail/detail.module';
import {AuthModule} from "./auth/auth.module";


@Module({
  imports: [
    UserModule,
    AuthModule,
    configModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        __dirname + '/**/entities/*.entity{.ts,.js}',
      ],
      synchronize: true,
      logging: true,
    }),
    TokenModule,
    SeedsModule,
    CarModule,
    DetailModule,
  ],
})
export class AppModule {}
