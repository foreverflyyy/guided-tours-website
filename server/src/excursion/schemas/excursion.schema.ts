import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {ApiProperty} from "@nestjs/swagger";
import {Place} from "../../places/schemas/place.schema";
import mongoose from "mongoose";

@Schema()
export class Excursion {
    @ApiProperty({ description: "excursion name", nullable: false })
    @Prop({ required: true })
    name: string;

    @ApiProperty({ description: "excursion description", nullable: false })
    @Prop({ required: true })
    description: string;

    @ApiProperty({ description: "excursion image", nullable: false })
    @Prop({ required: true })
    mainImage: string;

    @ApiProperty({ description: "excursion price", nullable: false })
    @Prop({ required: true })
    price: string;

    @ApiProperty({ description: "excursion images of excursion", nullable: false })
    @Prop({ required: true })
    images: string[];

    @ApiProperty({ description: "excursion images of places in excursion", nullable: false })
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Place.name }] })
    places: Place[];
}

export const ExcursionSchema = SchemaFactory.createForClass(Excursion);