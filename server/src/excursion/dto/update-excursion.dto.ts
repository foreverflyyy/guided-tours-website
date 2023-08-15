import {ObjectId} from "mongoose";

export class UpdateExcursionDto {
    readonly _id: ObjectId;
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly price: string;
}