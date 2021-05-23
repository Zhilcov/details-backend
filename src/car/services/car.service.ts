import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CarModel} from "../entities/car-model.entity";
import {MongoRepository, Repository} from "typeorm";
import {CarBrand} from "../entities/car-brand.entity";
import {CarModelDto} from "../dto/car-model.dto";
import {CarBrandDto} from "../dto/car-brand.dto";
import {CarDto} from "../dto/car-dto";
import {CarEntity} from "../entities/car.entity";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarModel)
    private readonly carModelRepository: Repository<CarModel>,
    @InjectRepository(CarBrand)
    private readonly carBrandRepository: Repository<CarBrand>,
  ) {}

  async createCarModel(carModel: CarModelDto): Promise<CarModel> {
    const model = new CarModel({
      name: carModel.name,
      brandId: carModel.brandId,
    });

    return await this.carModelRepository.save(model);
  }

  async createCarBrand(carBrand: CarBrandDto): Promise<CarBrand> {
    const brand = new CarBrand({
      name: carBrand.name
    });

    return await this.carBrandRepository.save(brand);
  }

  async createCar(car: CarDto): Promise<CarEntity> {
    const newCar = new CarEntity(car);
    return await this.carBrandRepository.save(newCar);
  }

}