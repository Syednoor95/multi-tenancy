import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
} from "class-validator";

@ObjectType()
export class UserGqlDto {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  readonly id?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly alias?: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @Matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
  readonly mobile?: string;


  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

}
