import { Controller, Get, Query } from "@nestjs/common";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private ListExerciseService: ListExerciseService
    ){}

    @Get("")
    async list(@Query() query:QueryExerciseDto) {        
        return await this.ListExerciseService.main(query)
    }
}