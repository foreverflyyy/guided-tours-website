import { Module } from '@nestjs/common';
import { ExcursionModule } from './excursion/excursion.module';
import {MongooseModule} from "@nestjs/mongoose";
import { AuthorizationModule } from './authorization/authorization.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGO_CONNECT),
      ExcursionModule,
      AuthorizationModule,
  ]
})
export class AppModule {}
