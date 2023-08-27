import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model, ObjectId} from "mongoose";
import {Place} from "./schemas/place.schema";
import {CreatePlaceDto} from "./dto/create-place.dto";

@Injectable()
export class PlacesService {
    constructor(@InjectModel(Place.name) private placeModel: Model<Place>) {}

    async getAllPlaces(): Promise<Place[]> {
        return this.placeModel.find();
    }

    getPlaceById(id: ObjectId): Promise<Place> {
        return this.placeModel.findById(id);
    }

    createPlaces(dto: CreatePlaceDto): string {
        dto.places.forEach(place => this.placeModel.create(place));
        return 'Success'
    }

    deleteAllPlaces() {
        return this.placeModel.deleteMany();
    }

    deletePlace(id: ObjectId) {
        return this.placeModel.findByIdAndDelete(id);
    }
}
