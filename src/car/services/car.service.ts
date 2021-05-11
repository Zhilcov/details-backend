import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CarModel} from "../car-model.entity";
import {MongoRepository} from "typeorm";
import {CarBrand} from "../car-brand.entity";
import {CarModelDto} from "../dto/car-model.dto";
import {CarBrandDto} from "../dto/car-brand.dto";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarModel)
    private readonly carModelRepository: MongoRepository<CarModel>,
    @InjectRepository(CarBrand)
    private readonly carBrandRepository: MongoRepository<CarBrand>,
  ) {}

  async createCarModel(carModel: CarModelDto): Promise<CarModel> {
    const model = new CarModel({
      name: carModel.name
    });

    return await this.carModelRepository.create(model);
  }

  async createCarBrand(carBrand: CarBrandDto): Promise<CarBrand> {
    const brand = new CarBrand({
      name: carBrand.name
    });

    return await this.carBrandRepository.create(brand);
  }

}