import {Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {PlacesService} from "./places.service";
import {CreatePlaceDto} from "./dto/create-place.dto";
import {Place} from "./place.model";

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
    @ApiOperation({ summary: "Get place by id" })
    @ApiParam({ name: "id", required: true, description: "place identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Place })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    getExcursionById(@Param("id") id: number) {
        return this.placesService.getPlaceById(id);
    }

    @Post()
    @ApiOperation({ summary: "Create some places" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: [Place] })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
    createPlaces(@Body() dto: CreatePlaceDto) {
        return this.placesService.createPlaces(dto);
    }

    @Delete(":id")
    @ApiParam({ name: "id", required: true, description: "place identifier" })
    @ApiOperation({ summary: "Delete place" })
    deleteExcursion(@Param("id") id: number) {
        return this.placesService.deletePlace(id);
    }
}
