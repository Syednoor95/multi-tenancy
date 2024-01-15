import { Body, Controller, Post } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // Get all users
  @MessagePattern({ cmd: "get_all_users" })
  getAllUsers() {
    console.log("get_all_users");
    return this.usersService.getAllUsers();
  }
  
  // ✅ Create a new user
  @Post()
  @MessagePattern({ cmd: "create_user" })
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log("create_user");
    return this.usersService.createUser(createUserDto);
  }
}
