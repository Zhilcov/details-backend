import { Module } from '@nestjs/common';
import {SeedsModule} from "./seed.module";


@Module({
  imports: [SeedsModule],
  exports: [SeedsModule]
})
export class DBModule {
  
}