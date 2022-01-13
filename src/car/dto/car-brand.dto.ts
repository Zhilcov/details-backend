import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CarBrandDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}