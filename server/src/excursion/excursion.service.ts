import {Injectable} from '@nestjs/common';
import {CreateExcursionDto} from "./dto/create-excursion.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Excursion} from "./excursion.model";
import {PlacesService} from "../places/places.service";

@Injectable()
export class ExcursionService {
    constructor(
        @InjectModel(Excursion) private excursionRepository: typeof Excursion,
        private placesService: PlacesService
    ) {}

    async getAllExcursions(): Promise<Excursion[]> {
        return this.excursionRepository.findAll({include: {all: true}});
    }

    getExcursionById(id: number): Promise<Excursion> {
        return this.excursionRepository.findOne({where: {id}});
    }

    async createExcursion(dto: CreateExcursionDto){
        const excursion = await this.excursionRepository.create(dto);
        const places = [];

        for(const placeId of dto.places){
            const place = await this.placesService.getPlaceById(placeId);
            places.push(place.id)
        }

        await excursion.$set('places', places)
    }

    async deleteExcursion(id: number): Promise<void> {
        await this.excursionRepository.destroy({where: {id}});
    }
}
