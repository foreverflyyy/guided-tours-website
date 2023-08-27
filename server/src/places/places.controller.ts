import {Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Excursion} from "../excursion/schemas/excursion.schema";
import {AuthGuard} from "@nestjs/passport";
import {ObjectId} from "mongoose";
import {PlacesService} from "./places.service";
import {Place} from "./schemas/place.schema";
import {CreatePlaceDto} from "./dto/create-place.dto";

@ApiTags("Places")
@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService) {}

    @Get()
    @ApiOperation({ summary: "Get all places" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Place] })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getAll(): any {
        return this.placesService.getAllPlaces();
    }

    @Get(":id")
    @UseGuards(AuthGuard("api-key"))
    @ApiOperation({ summary: "Get place by id" })
    @ApiParam({ name: "id", required: true, description: "place identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Excursion })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getExcursionById(@Param("id") id: ObjectId) {
        return this.placesService.getPlaceById(id);
    }

    @Post("/create")
    @ApiOperation({ summary: "Create some places" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Place] })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    createPlaces(@Body() dto: CreatePlaceDto) {
        return this.placesService.createPlaces(dto);
    }

    @Delete()
    @ApiOperation({ summary: "Delete places" })
    deleteAllExcursions() {
        return this.placesService.deleteAllPlaces();
    }

    @Delete(":id")
    @ApiParam({ name: "id", required: true, description: "place identifier" })
    @ApiOperation({ summary: "Delete place" })
    deleteExcursion(@Param("id") id: ObjectId) {
        return this.placesService.deletePlace(id);
    }
}
