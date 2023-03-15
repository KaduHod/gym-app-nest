import { Body, Controller, Get } from "@nestjs/common";
import { HttpUnhandledError } from "src/errors/response.errors";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import QueryMuscleGroupDto from "./muscle.validator";
import ListMuscleGroupService from "./services/listMuscleGroups.service";

@Controller("muscle")
export default class MuscleController {

    constructor(
        private MuscleGroupRepository: MuscleGroupRepository,
        private ListMuscleGroupsService: ListMuscleGroupService
    ){}
    @Get('/group')
    async list(@Body() query:QueryMuscleGroupDto){
        try {
            await this.ListMuscleGroupsService.setQuery(query)
            return await this.ListMuscleGroupsService.main()
        } catch (error) {
               throw new HttpUnhandledError(error)
        }
    }
}