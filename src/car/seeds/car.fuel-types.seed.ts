import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Command} from "nestjs-command";

import {CarFuelTypeEntity} from "../entities/car-fuel-type.entity";
import {CarFuelTypes} from "../enums/carFuelTypes";


@Injectable()
export class CarFuelTypesSeed {
  constructor(
    @InjectRepository(CarFuelTypeEntity)
    private readonly repository: Repository<CarFuelTypeEntity>,
  ) { }

  @Command({ command: 'seed:car-fuel-types', describe: 'create a admin', autoExit: true })
  async create() {
    for(let key in CarFuelTypes) {
      const type = new CarFuelTypeEntity({
        name: CarFuelTypes[key],
        system_name: key.toLowerCase()
      });

      await this.repository.save(type)
    }
  }
}