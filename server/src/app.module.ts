import { Module } from '@nestjs/common';
import { ExcursionModule } from './excursion/excursion.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      ExcursionModule,
      MongooseModule.forRoot("mongodb+srv://foreverflyyy:nik16112002@excursions.8jsxlcn.mongodb.net/"),
  ]
})
export class AppModule {}
