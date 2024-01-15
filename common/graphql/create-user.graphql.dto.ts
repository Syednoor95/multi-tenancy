// create-user.graphql.dto.ts

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  mobile: string;

  @Field({ nullable: true })
  isActive: boolean;
}
