import {EntityRepository, Repository} from "typeorm";
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

import {DetailEntity} from "../entities/detail.entity";
import {CreateDetailDto} from "../dto/create-detail.dto";


@EntityRepository(DetailEntity)
export class DetailsRepository extends Repository<DetailEntity> {

  async paginateDetails(options: IPaginationOptions) {
    return paginate<DetailEntity>(this, options);
  }

  async createDetail(detail: CreateDetailDto) {
    const newDetail = new DetailEntity(detail);
    console.log(this.manager)
    return await this.save(newDetail);
  }
}