import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {DetailsService} from "./services/details.service";

@ApiTags('details')
@Controller('detail')
export class DetailController {
  constructor(private readonly detailsService: DetailsService) {
  }

  @Get()
  async getDetailsItems(req) {
    this.detailsService.getDetailsItems(req);
  }

}
