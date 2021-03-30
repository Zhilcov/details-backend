import { IsString, IsDateString } from "class-validator";

export class TokenDto {
  @IsString()
  token: string;
  @IsString()
  uId: string;
  @IsDateString()
  expireAt: string;
}