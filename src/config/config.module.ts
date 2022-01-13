import { ConfigModule } from "@nestjs/config";
import config from "./config";

const environment = process.env.NODE_ENV || 'development';
export const configModule = ConfigModule.forRoot({
  envFilePath: `.env.${environment}`,
  isGlobal: true,
  load: [config],
});
