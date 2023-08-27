import {ApiProperty} from "@nestjs/swagger";
import {Place} from "../schemas/place.schema";

class PlaceItem {
    name: string;
    image: string;
}

export class CreatePlaceDto {
    @ApiProperty({ description: "Places", nullable: false, example: [PlaceItem]})
    readonly places: PlaceItem[];
}
