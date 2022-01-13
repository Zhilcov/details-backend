import {Module} from "@nestjs/common";
import {UserSeedModule} from "../user/seeds/user.seed.module";
import {CarSeedModule} from "../car/seeds/car.seed.module";
import {DetailsSeedModule} from "../detail/seeds/details.seed.module";


@Module({
  imports: [UserSeedModule, CarSeedModule, DetailsSeedModule],
})
export class SeedsModule {

}