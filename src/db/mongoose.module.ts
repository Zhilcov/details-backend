import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "../user/shemas/user.schema";

export const mongooseModule = MongooseModule.forFeature([
  {name: 'User', schema: UserSchema}
])