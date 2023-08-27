import {ApiProperty} from "@nestjs/swagger";
import {ObjectId} from "mongoose";

export class CreateExcursionDto {
    @ApiProperty({ description: "Id", nullable: false, example: "Excursion" })
    readonly name: string;

    @ApiProperty({ description: "description", nullable: false, example: "excursion description" })
    readonly description: string;

    @ApiProperty({ description: "mainImage", nullable: false, example: "https://image" })
    readonly mainImage: string;

    @ApiProperty({ description: "price", nullable: false, example: "2000" })
    readonly price: string;

    @ApiProperty({ description: "images", nullable: false, example: "[https://image]" })
    readonly images: string[];

    @ApiProperty({ description: "places", nullable: false, example: ["64ebd828b2f8d271b1769acb"] })
    readonly places: ObjectId[];
}