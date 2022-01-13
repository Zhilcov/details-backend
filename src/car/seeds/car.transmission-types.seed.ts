import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Command} from "nestjs-command";
import {CarTransmissionTypeEntity} from "../entities/car-transmission-type.entity";
import {TransmissionTypes} from "../enums/transmissionTypes";

@Injectable()
export class CarTransmissionTypesSeed {
  constructor(
    @InjectRepository(CarTransmissionTypeEntity)
    private readonly repository: Repository<CarTransmissionTypeEntity>,
  ) { }

  @Command({ command: 'seed:car-transmission-types', autoExit: true })
  async create() {
    for(let key in TransmissionTypes) {
      const type = new CarTransmissionTypeEntity({
        name: TransmissionTypes[key],
        system_name: key
      });

      await this.repository.save(type)
    }
  }
}