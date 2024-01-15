import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "USERS_SERVICE",
        transport: Transport.NATS,
        options: {
          url: "nats://nats:4222",
          queue: "users_queue",
        },
      },
    ]),
  ],

  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
