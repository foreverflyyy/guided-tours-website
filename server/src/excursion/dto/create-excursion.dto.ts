import {ApiProperty} from "@nestjs/swagger";

export class CreateExcursionDto {
    @ApiProperty({ description: "Id", nullable: false, example: "Excursion" })
    readonly name: string;

    @ApiProperty({ description: "Id", nullable: false, example: "Excursion description" })
    readonly description: string;

    @ApiProperty({ description: "Id", nullable: false, example: "https://image" })
    readonly image: string;

    @ApiProperty({ description: "Id", nullable: false, example: "2000" })
    readonly price: string;
}