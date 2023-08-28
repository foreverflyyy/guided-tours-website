import { Module } from '@nestjs/common';
import { ExcursionModule } from './excursion/excursion.module';
import { AuthorizationModule } from './authorization/authorization.module';
import {ConfigModule} from "@nestjs/config";
import { PlacesModule } from './places/places.module';
import { SequelizeModule } from '@nestjs/sequelize';
import {Excursion} from "./excursion/excursion.model";
import {Place} from "./places/place.model";
import {ExcursionPlaces} from "./places/excursion-places.model";

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [Excursion, Place, ExcursionPlaces],
          autoLoadModels: true
      }),
      ExcursionModule,
      AuthorizationModule,
      PlacesModule,
  ]
})
export class AppModule {}
