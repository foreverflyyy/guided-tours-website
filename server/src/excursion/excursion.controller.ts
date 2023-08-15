import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ExcursionService} from "./excursion.service";
import {ObjectId} from "mongoose";
import {CreateExcursionDto} from "./dto/create-excursion.dto";
import {UpdateExcursionDto} from "./dto/update-excursion.dto";

@Controller('/excursion')
export class ExcursionController {
    constructor(private readonly excursionService: ExcursionService) {}

    @Get()
    getAll(): any {
        return this.excursionService.getAllExcursions();
    }

    @Get(":id")
    getExcursionById(@Param("id") id: ObjectId) {
        return this.excursionService.getExcursionById(id);
    }

    @Post("/create")
    createExcursion(@Body() dto: CreateExcursionDto) {
        return this.excursionService.createExcursion(dto);
    }

    @Post("/update")
    updateExcursion(@Body() dto: UpdateExcursionDto) {
        return this.excursionService.updateExcursion(dto);
    }

    @Delete(":id")
    deleteExcursion(@Param("id") id: ObjectId) {
        return this.excursionService.deleteExcursion(id);
    }
}
