import {IsNumberString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class GetDetailsDto {
  @IsNumberString()
  @ApiProperty()
  page: string;

  @IsNumberString()
  @ApiProperty()
  limit: string;
}