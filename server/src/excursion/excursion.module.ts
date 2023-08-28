import { Module } from '@nestjs/common';
import { ExcursionController } from './excursion.controller';
import { ExcursionService } from './excursion.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Excursion} from "./excursion.model";
import {Place} from "../places/place.model";
import {ExcursionPlaces} from "../places/excursion-places.model";
import {PlacesModule} from "../places/places.module";

@Module({
  imports: [
      SequelizeModule.forFeature([Excursion, Place, ExcursionPlaces]),
      PlacesModule
  ],
  controllers: [ExcursionController],
  providers: [ExcursionService]
})
export class ExcursionModule {}
