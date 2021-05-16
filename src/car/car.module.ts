import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import {CarService} from "./services/car.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CarBrand} from "./entities/car-brand.entity";
import {CarModel} from "./entities/car-model.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CarBrand, CarModel])
  ],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
