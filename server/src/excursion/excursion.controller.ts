import {Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {ExcursionService} from "./excursion.service";
import {ObjectId} from "mongoose";
import {CreateExcursionDto} from "./dto/create-excursion.dto";
import {UpdateExcursionDto} from "./dto/update-excursion.dto";
import {ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {Excursion} from "./schemas/excursion.schema";
import {AuthGuard} from "@nestjs/passport";

@ApiTags("Excursions")
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('/Excursion')
export class ExcursionController {
    constructor(private readonly excursionService: ExcursionService) {}

    @Get()
    @ApiOperation({ summary: "Get all excursions.ts" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Excursion] })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getAll(): any {
        return this.excursionService.getAllExcursions();
    }

    @Get(":id")
    @UseGuards(AuthGuard("api-key"))
    @ApiOperation({ summary: "Get Excursion by id" })
    @ApiParam({ name: "id", required: true, description: "Excursion identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getExcursionById(@Param("id") id: ObjectId) {
        return this.excursionService.getExcursionById(id);
    }

    @Post("/create")
    @ApiOperation({ summary: "Create new Excursion" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    createExcursion(@Body() dto: CreateExcursionDto) {
        return this.excursionService.createExcursion(dto);
    }

    @Post("/update")
    @ApiOperation({ summary: "Update Excursion" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    updateExcursion(@Body() dto: UpdateExcursionDto) {
        return this.excursionService.updateExcursion(dto);
    }

    @Delete(":id")
    @ApiParam({ name: "id", required: true, description: "Excursion identifier" })
    @ApiOperation({ summary: "Delete Excursion" })
    deleteExcursion(@Param("id") id: ObjectId) {
        return this.excursionService.deleteExcursion(id);
    }
}
