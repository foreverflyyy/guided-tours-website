import {Injectable} from '@nestjs/common';
import {Model, ObjectId} from "mongoose";
import {CreateExcursionDto} from "./dto/create-excursion.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Excursion} from "./schemas/excursion.schema";
import {UpdateExcursionDto} from "./dto/update-excursion.dto";

@Injectable()
export class ExcursionService {
    constructor(@InjectModel(Excursion.name) private excursionModel: Model<Excursion>) {}

    async getAllExcursions(): Promise<Excursion[]> {
        return this.excursionModel.find();
    }

    getExcursionById(id: ObjectId): Promise<Excursion> {
        return this.excursionModel.findById(id);
    }

    createExcursion(dto: CreateExcursionDto): Promise<Excursion> {
        return this.excursionModel.create(dto);
    }

    updateExcursion(dto: UpdateExcursionDto): Promise<Excursion> {
        return this.excursionModel.findByIdAndUpdate(dto._id, dto);
    }

    async deleteExcursion(id: ObjectId) {
        const excursion = await this.excursionModel.findByIdAndDelete(id);
        return excursion._id;
    }
}
