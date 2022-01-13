import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDetailDto {
  @IsNotEmpty()
  @ApiProperty()
  purchasePrice: string;

  @IsNotEmpty()
  @ApiProperty()
  finishPrice: string;

  @IsNotEmpty()
  @ApiProperty()
  sellingPrice: string;

  @IsNotEmpty()
  @ApiProperty()
  detailTypeId: string;

  @ApiProperty()
  videoAttachmentId: string;

  @ApiProperty()
  photoPath: string;

  @IsNotEmpty()
  @ApiProperty()
  carId: string;
}