import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicio } from "src/entitys/Exercicios.entity";
import ExerciseControler from "./exercise.controller";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Module({
    imports:[TypeOrmModule.forFeature([Exercicio])],
    controllers:[ExerciseControler],
    providers:[
        ListExerciseService, 
        QueryExerciseDto
    ]
})
export default class ExerciseModule {}



