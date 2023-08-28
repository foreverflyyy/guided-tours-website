import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Place} from "./place.model";
import {Excursion} from "../excursion/excursion.model";
import {ExcursionPlaces} from "./excursion-places.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Place, Excursion, ExcursionPlaces])
  ],
  controllers: [PlacesController],
  providers: [PlacesService],
  exports: [PlacesService]
})
export class PlacesModule {}
