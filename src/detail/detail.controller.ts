import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe
} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {DetailsService} from "./services/details.service";
import {CreateDetailDto} from "./dto/create-detail.dto";
import {GetDetailsDto} from "./dto/get-details.dto";
import {Pagination} from "nestjs-typeorm-paginate";
import {DetailEntity} from "./entities/detail.entity";

@ApiTags('details')
@Controller('details')
export class DetailController {
  constructor(private readonly detailsService: DetailsService) {
  }

  @Get('')
  async getDetailsItems(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ): Promise<Pagination<DetailEntity>> {

    return this.detailsService.getDetailsItems({
      page,
      limit
    });
  }

  @Post('add-detail-to-stock')
  async createDetail(@Body(ValidationPipe) req: CreateDetailDto) {
    return this.detailsService.addDetailToStock(req);
  }
}
