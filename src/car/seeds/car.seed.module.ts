import {Module} from "@nestjs/common";
import {CommandModule} from "nestjs-command";
import {TypeOrmModule} from "@nestjs/typeorm";

import {CarBodyTypeEntity} from "../entities/car-body-type.entity";
import {CarBodyTypesSeed} from "./car.body-types.seed";
import {CarFuelTypesSeed} from "./car.fuel-types.seed";
import {CarFuelTypeEntity} from "../entities/car-fuel-type.entity";
import {CarTransmissionTypeEntity} from "../entities/car-transmission-type.entity";
import {CarTransmissionTypesSeed} from "./car.transmission-types.seed";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarBodyTypeEntity,
      CarFuelTypeEntity,
      CarTransmissionTypeEntity,
    ]),
    CommandModule
  ],
  providers: [CarBodyTypesSeed, CarFuelTypesSeed, CarTransmissionTypesSeed]
})
export class CarSeedModule {

}