import { Body, Controller, Get, Header, HttpCode, Query } from "@nestjs/common";
import { MuscleGroup } from "@prisma/client";
import EntityMapper from "src/domain/domain.mapper";
import { Mapper } from "src/utils/mappers.helper";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "./muscle.validator";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { PortionMapper } from "./services/muscles.mapper";

@Controller("muscle")
export default class MuscleController {

    constructor(
        private ListMuscleGroupsService: ListMuscleGroupService,
        private ListMusclePortionService: ListMusclePortionService
    ){}

    @Get('/group')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async listGroup(
        @Query() query:QueryMuscleGroupDto
    ){
        const groups = await this.ListMuscleGroupsService.main(query)
        return {
            groups  
        }
    }

    @Get('/portion')
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async listPortion(
        @Query() query:QueryMusclePortionDto
    ){
        const portions = await this.ListMusclePortionService.main(query)

        return {
            portions
        }
    }
}