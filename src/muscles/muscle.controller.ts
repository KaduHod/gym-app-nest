import { Body, Controller, Get, Header, HttpCode } from "@nestjs/common";
import { Mapper } from "src/utils/mappers.helper";
import { QueryMuscleGroupDto } from "./muscle.validator";
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
        const groups = await this.ListMuscleGroupsService.main(query) 
        return Mapper.mapToHttp(groups)
    }

    @Get('/portion')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async listPortion(@Body() query:QueryMuscleGroupDto){
        const portions = await this.ListMusclePortionService.main(query)
        return Mapper.mapToHttp(portions)
    }
}