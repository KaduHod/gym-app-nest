import { Controller, Get, Query } from "@nestjs/common";
import EntityMapper from "src/domain/domain.mapper";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private ListExerciseService: ListExerciseService
    ){}

    @Get("")
    async list(@Query() query:QueryExerciseDto) {
        const exercises = await this.ListExerciseService.main(query)
        return {
            exercies: exercises.map(EntityMapper.removeCommonFields)
        }
    }
}