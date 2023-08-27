import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {ApiProperty} from "@nestjs/swagger";

@Schema()
export class Place {
    @ApiProperty({ description: "place name", nullable: false })
    @Prop({ required: true })
    name: string;

    @ApiProperty({ description: "place image", nullable: false })
    @Prop({ required: true })
    image: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);