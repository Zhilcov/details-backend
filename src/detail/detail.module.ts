import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DetailEntity} from "./entities/detail.entity";
import {DetailsService} from "./services/details.service";
import {DetailController} from "./detail.controller";
import {DetailsRepository} from "./repositories/details-repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([DetailEntity])
  ],
  controllers: [DetailController],
  providers: [
    DetailsService, DetailsRepository
  ]
})
export class DetailModule {}
