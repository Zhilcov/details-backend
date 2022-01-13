import {IsEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CarModelsListDto {
  @IsString()
  @IsEmpty()
  @ApiProperty()
  brandId?: string;
}