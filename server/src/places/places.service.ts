import { Injectable } from '@nestjs/common';
import {CreatePlaceDto} from "./dto/create-place.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Place} from "./place.model";

@Injectable()
export class PlacesService {
    constructor(@InjectModel(Place) private placeRepository: typeof Place) {}

    async getAllPlaces(): Promise<Place[]> {
        return await this.placeRepository.findAll();
    }

    async getPlaceById(id: number): Promise<Place> {
        return await this.placeRepository.findOne({where: {id}});
    }

    async createPlaces(dto: CreatePlaceDto) {
        return await this.placeRepository.create(dto);
    }

    async deletePlace(id: number) {
        return await this.placeRepository.destroy({where: {id}});
    }
}
