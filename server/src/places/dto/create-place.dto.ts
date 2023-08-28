import {ApiProperty} from "@nestjs/swagger";

export class CreatePlaceDto {
    @ApiProperty({ description: "name", nullable: false, example: "Kaliningrad" })
    readonly name: string;

    @ApiProperty({ description: "image", nullable: false, example: "http//image" })
    readonly image: string;
}
