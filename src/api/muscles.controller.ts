import { Controller, Get, Header, HttpCode, Query, UseGuards } from "@nestjs/common";
import AuthGuard from "src/guards/auth.guard";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "../modules/muscles/muscle.validator";
import ListMuscleGroupService from "../modules/muscles/services/listMuscleGroups.service";
import ListMusclePortionService from "../modules/muscles/services/listMusclePortion.service";

@Controller('api/muscles')
export default class ApiMusclesController {
    constructor(
        private ListMuscleGroupsService: ListMuscleGroupService,
        private ListMusclePortionService: ListMusclePortionService,
    ){}

    @Get('/group')
    @HttpCode(200)
    @UseGuards(AuthGuard)
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
    @UseGuards(AuthGuard)
    @Header('Content-Type', 'application/json')
    async listPortion(
        @Query() query:QueryMusclePortionDto
    ){
        const portions = await this.ListMusclePortionService.main(query)

        return { portions }
    }
}