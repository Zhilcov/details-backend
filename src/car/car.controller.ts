import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CarService } from './services/car.service';
import { CarModelDto } from './dto/car-model.dto';
import { CarModel } from './entities/car-model.entity';
import { ApiTags } from '@nestjs/swagger';
import { CarBrandDto } from './dto/car-brand.dto';
import { CarBrand } from './entities/car-brand.entity';
import { CarDto } from './dto/car-dto';
import { CarEntity } from './entities/car.entity';
import { ListItemInterface } from '../interfaces/list-item-interface';
import { CarModelsListDto } from './dto/car-models-list';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('create-car-model')
  async createCarModel(
    @Body(ValidationPipe) carModel: CarModelDto,
  ): Promise<CarModel> {
    return this.carService.createCarModel(carModel);
  }

  @Post('create-car-brand')
  @UseGuards(JwtAuthGuard)
  async createCarBrand(
    @Body(ValidationPipe) brand: CarBrandDto,
  ): Promise<CarBrand> {
    return this.carService.createCarBrand(brand);
  }

  @Post('create-car')
  async createCar(@Body(ValidationPipe) req: CarDto): Promise<CarEntity> {
    return this.carService.createCar(req);
  }

  @Get('get-car-brands-list')
  @UseGuards(JwtAuthGuard)
  async getCarBrandsList(): Promise<Array<ListItemInterface>> {
    return this.carService.getCarBrandsList();
  }

  @Get('get-car-models-list')
  async getCarModelsList(
    @Query() queryParams: CarModelsListDto,
  ): Promise<Array<ListItemInterface>> {
    return this.carService.getCarModels(queryParams.brandId);
  }
}
