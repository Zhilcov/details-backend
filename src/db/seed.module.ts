import {Module} from "@nestjs/common";
import {CommandModule} from "nestjs-command";
import {AdminSeeder} from "../user/seeds/admin.seed";
import {UserService} from "../user/user.service";
import {mongooseModule} from "./mongoose.module";


@Module({
  imports: [CommandModule, mongooseModule],
  providers: [AdminSeeder, UserService],
})
export class SeedsModule {

}