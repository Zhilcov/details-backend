import {Injectable} from "@nestjs/common";
import {DetailsRepository} from "../repositories/details-repository";


@Injectable()
export class DetailsService {
  constructor(
    private readonly detailsRepository: DetailsRepository
  ) {}

  async getDetailsItems(paginateOptions) {
    let items = await this.detailsRepository.paginateDetails(paginateOptions)
  }
}