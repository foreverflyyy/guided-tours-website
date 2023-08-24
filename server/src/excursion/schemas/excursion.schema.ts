import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, ObjectId} from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type ExcursionDocument = HydratedDocument<Excursion>;

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
    image: string;

    @ApiProperty({ description: "excursion price", nullable: false })
    @Prop({ required: true })
    price: string;
}

export const ExcursionSchema = SchemaFactory.createForClass(Excursion);