import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IUser} from "./interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    console.log(this.userModel);
  }

  async find(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }
}
