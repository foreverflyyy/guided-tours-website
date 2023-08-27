import { Module } from '@nestjs/common';
import { ExcursionController } from './excursion.controller';
import { ExcursionService } from './excursion.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Excursion, ExcursionSchema} from "./schemas/excursion.schema";

@Module({
  imports: [MongooseModule.forFeature([
      { name: Excursion.name, schema: ExcursionSchema }
  ])],
  controllers: [ExcursionController],
  providers: [ExcursionService]
})
export class ExcursionModule {}
