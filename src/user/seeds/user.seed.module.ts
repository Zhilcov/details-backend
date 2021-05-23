import {Module} from "@nestjs/common";
import {CommandModule} from "nestjs-command";
import {AdminSeeder} from "./admin.seed";
import {UserService} from "../user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";

@Module({
  imports: [CommandModule, TypeOrmModule.forFeature([User])],
  providers: [AdminSeeder, UserService],
})
export class UserSeedModule {

}