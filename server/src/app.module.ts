import { Module } from '@nestjs/common';
import { ExcursionModule } from './excursion/excursion.module';
import {MongooseModule} from "@nestjs/mongoose";
import { AuthorizationModule } from './authorization/authorization.module';
import {ConfigModule} from "@nestjs/config";
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGO_CONNECT),
      ExcursionModule,
      AuthorizationModule,
      PlacesModule,
  ]
})
export class AppModule {}
