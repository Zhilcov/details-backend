import { IsString, IsDateString } from "class-validator";

export class TokenDto {
  @IsString()
  token: string;
  @IsString()
  userId: string;
  @IsDateString()
  expireAt: string;
}