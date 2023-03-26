import { Controller, Get, Query } from "@nestjs/common";
import ExerciseMapper from "./services/exercise.mapper";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private ListExerciseService: ListExerciseService
    ){}

    @Get("")
    async list(@Query() query:QueryExerciseDto) {
        let exercises = await this.ListExerciseService.main(query)
        
        return {
            exercises: exercises.map(ExerciseMapper.mapPortions)
        }
    }
}