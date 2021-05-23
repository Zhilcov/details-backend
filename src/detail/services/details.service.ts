import {Injectable} from "@nestjs/common";
import {DetailsRepository} from "../repositories/details-repository";
import {CreateDetailDto} from "../dto/create-detail.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {DetailEntity} from "../entities/detail.entity";
import {IPaginationOptions, Pagination} from "nestjs-typeorm-paginate";


@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(DetailsRepository)
    private readonly detailsRepository: DetailsRepository
  ) {}

  async getDetailsItems(paginateOptions: IPaginationOptions): Promise<Pagination<DetailEntity>> {
    return await this.detailsRepository.paginateDetails(paginateOptions)
  }

  async addDetailToStock(detail: CreateDetailDto) {
    console.log(this.detailsRepository);
    return await this.detailsRepository.createDetail(detail);
  }
}