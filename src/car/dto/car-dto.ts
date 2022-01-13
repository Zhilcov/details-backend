import {ApiProperty} from "@nestjs/swagger";
import {IsDateString, IsDecimal, IsNotEmpty} from "class-validator";

export class CarDto {
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  year: Date;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  engineVolume: string;

  @IsNotEmpty()
  @ApiProperty()
  carBrandId: string;

  @IsNotEmpty()
  @ApiProperty()
  carModelId: string;

  @IsNotEmpty()
  @ApiProperty()
  fuelTypeId: string;

  @IsNotEmpty()
  @ApiProperty()
  bodyTypeId: string;

  @IsNotEmpty()
  @ApiProperty()
  carTransmissionTypeId: string;
}