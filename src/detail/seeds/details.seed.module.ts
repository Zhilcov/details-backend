import {Module} from "@nestjs/common";
import {DetailsTypesSeed} from "./details.types.seed";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DetailTypeEntity} from "../entities/detail-type.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([DetailTypeEntity])
  ],
  providers: [DetailsTypesSeed]
})
export class DetailsSeedModule {

}