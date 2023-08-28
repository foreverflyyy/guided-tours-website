import {ApiProperty} from "@nestjs/swagger";

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

    @ApiProperty({ description: "id places", nullable: false, example: "['24672349723sdcs22']" })
    readonly places: number[];
}