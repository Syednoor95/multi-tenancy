import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UserGqlDto } from "common/graphql/user-gql.dto";
import { CreateUserInput } from "common/graphql/create-user.graphql.dto";

@Resolver(() => UserGqlDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserGqlDto])
  async getAllUsers(): Promise<UserGqlDto[]> {
    return this.usersService.getAllUsers();
  }

  @Mutation(() => UserGqlDto)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserGqlDto> {
    return this.usersService.createUser(input);
  }
}
