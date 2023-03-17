import { Body, Controller, Get, Header, HttpCode } from "@nestjs/common";
import { HttpUnhandledError } from "src/errors/response.errors";
import QueryMuscleGroupDto from "./muscle.validator";
import ListMuscleGroupService from "./services/listMuscleGroups.service";

@Controller("muscle")
export default class MuscleController {

    constructor(
        private ListMuscleGroupsService: ListMuscleGroupService
    ){}
    @Get('/group')
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async list(@Body() query:QueryMuscleGroupDto){
        return await this.ListMuscleGroupsService.main(query)
    }
}