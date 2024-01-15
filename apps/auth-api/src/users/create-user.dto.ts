// create-user.dto.ts

import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  mobile: string;

  @IsOptional()
  isActive: boolean;
}
