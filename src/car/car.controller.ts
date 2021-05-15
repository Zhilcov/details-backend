import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {CarService} from "./services/car.service";
import {CarModelDto} from "./dto/car-model.dto";
import {CarModel} from "./car-model.entity";
import {ApiTags} from "@nestjs/swagger";
import {CarBrandDto} from "./dto/car-brand.dto";
import {CarBrand} from "./car-brand.entity";

@ApiTags('carModule')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {
  }

  @Post('create-car-model')
  async createCarModel(@Body(ValidationPipe) carModel: CarModelDto): Promise<CarModel> {
    return this.carService.createCarModel(carModel);
  }

  @Post('create-car-brand')
  async createCarBrand(@Body(ValidationPipe) brand: CarBrandDto): Promise<CarBrand> {
    return this.carService.createCarBrand(brand);
  }

}
