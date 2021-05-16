import {EntityRepository, Repository} from "typeorm";
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

import {DetailEntity} from "../entities/detail.entity";

@EntityRepository(DetailEntity)
export class DetailsRepository extends Repository<DetailEntity> {

  async paginateDetails(options: IPaginationOptions) {
    return paginate<DetailEntity>(this, options);
  }
}