import {Injectable} from "@nestjs/common";
import {UserService} from "../../user/user.service";
import {Command} from "nestjs-command";
import {Repository} from "typeorm";
import {CarBodyTypeEntity} from "../entities/car-body-type.entity";
import {CarBodyTypes} from "../enums/carBodyTypes";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CarBodyTypesSeed {
  constructor(
    @InjectRepository(CarBodyTypeEntity)
    private readonly repository: Repository<CarBodyTypeEntity>,
  ) { }

  @Command({ command: 'seed:car-body-types', describe: 'create a admin', autoExit: true })
  async create() {
    for(let key in CarBodyTypes) {
      const type = new CarBodyTypeEntity({
        name: CarBodyTypes[key],
        system_name: key
      });

      await this.repository.save(type)
    }
  }
}