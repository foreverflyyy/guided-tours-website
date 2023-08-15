import {ObjectId} from "mongoose";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateExcursionDto {
    @ApiProperty({ description: "Id", nullable: false, example: "64db4e8e0cf751e118283219" })
    readonly _id: ObjectId;

    @ApiProperty({ description: "Name", nullable: false, example: "Excursion"})
    readonly name: string;

    @ApiProperty({ description: "Description", nullable: false, example: "Excursion description"})
    readonly description: string;

    @ApiProperty({ description: "Image", nullable: false, example: "https://image"})
    readonly image: string;

    @ApiProperty({ description: "Price", nullable: false, example: "2000" })
    readonly price: string;
}