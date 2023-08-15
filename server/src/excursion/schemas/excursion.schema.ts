import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, ObjectId} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type ExcursionDocument = HydratedDocument<Excursion>;

@Schema()
export class Excursion {
    @ApiProperty({ description: "Excursion name", nullable: false })
    @Prop({ required: true })
    name: string;

    @ApiProperty({ description: "Excursion description", nullable: false })
    @Prop({ required: true })
    description: string;

    @ApiProperty({ description: "Excursion image", nullable: false })
    @Prop({ required: true })
    image: string;

    @ApiProperty({ description: "Excursion price", nullable: false })
    @Prop({ required: true })
    price: string;
}

export const ExcursionSchema = SchemaFactory.createForClass(Excursion);