import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../../../../common/entity/user.model";
import { CustomErrorDto } from "common/graphql/custom-error.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  // ✅ Done
  public getAllUsers = async (): Promise<User[] | CustomErrorDto> => {
    try {
      const users = await this.userModel.findAll<User>({});

      if (!users) {
        return { message: "No users found!", statusCode: 400 };
      }

      return users;
    } catch (error) {
      return error;
    }
  };

  // ✅ Create a new user
  public createUser = async (createUserDto: Partial<User>): Promise<User | CustomErrorDto> => {
    try {
      console.log("create user", createUserDto)
      const newUser = await this.userModel.create(createUserDto);

      return newUser;
    } catch (error) {
      return { message: "Error creating user", statusCode: 500, error };
    }
  };
}
