import { Body, Controller, Get, Header, HttpCode, Query } from "@nestjs/common";
import EntityMapper from "src/domain/domain.mapper";
import { Mapper } from "src/utils/mappers.helper";
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
    async listGroup(
        @Query() query:QueryMuscleGroupDto
    ){
        const groups = await this.ListMuscleGroupsService.main(query) 
        return {
            groups: groups.map(EntityMapper.removeCommonFields)
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
            portions: portions.map(EntityMapper.removeCommonFields)
        }
    }
}