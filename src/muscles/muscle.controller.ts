import { Body, Controller, Get, Header, HttpCode } from "@nestjs/common";
import { HttpUnhandledError } from "src/errors/response.errors";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "./muscle.validator";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";

@Controller("muscle")
export default class MuscleController {

    constructor(
        private ListMuscleGroupsService: ListMuscleGroupService,
        private ListMusclePortionService: ListMusclePortionService
    ){}

    @Get('/group')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async listGroup(@Body() query:QueryMuscleGroupDto){
        return await this.ListMuscleGroupsService.main(query)
    }

    @Get('/portion')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async listPortion(@Body() query:QueryMuscleGroupDto){
        return await this.ListMusclePortionService.main(query)
    }
}