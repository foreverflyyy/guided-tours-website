import {Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {ExcursionService} from "./excursion.service";
import {CreateExcursionDto} from "./dto/create-excursion.dto";
import {ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {Excursion} from "./excursion.model";

@ApiTags("Excursions")
@ApiSecurity("X-API-KEY", ["X-API-KEY"])
@Controller('/excursion')
export class ExcursionController {
    constructor(private readonly excursionService: ExcursionService) {}

    @Get()
    @ApiOperation({ summary: "Get all excursions" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Excursion] })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getAll(): any {
        return this.excursionService.getAllExcursions();
    }

    @Get(":id")
    @UseGuards(AuthGuard("api-key"))
    @ApiOperation({ summary: "Get excursion by id" })
    @ApiParam({ name: "id", required: true, description: "excursion identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getExcursionById(@Param("id") id: number) {
        return this.excursionService.getExcursionById(id);
    }

    @Post()
    @ApiOperation({ summary: "Create new excursion" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    createExcursion(@Body() dto: CreateExcursionDto) {
        return this.excursionService.createExcursion(dto);
    }

    @Delete(":id")
    @ApiParam({ name: "id", required: true, description: "excursion identifier" })
    @ApiOperation({ summary: "Delete excursion" })
    deleteExcursion(@Param("id") id: number) {
        return this.excursionService.deleteExcursion(id);
    }
}
