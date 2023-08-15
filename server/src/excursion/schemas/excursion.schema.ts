import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, ObjectId} from 'mongoose';

export type ExcursionDocument = HydratedDocument<Excursion>;

@Schema()
export class Excursion {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    price: string;
}

export const ExcursionSchema = SchemaFactory.createForClass(Excursion);