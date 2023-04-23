import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicio } from "src/entitys/Exercicios.entity";
import { PrismaService } from "src/prisma/prisma.service";
import ExerciseControler from "./exercise.controller";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Module({
    imports:[TypeOrmModule.forFeature([Exercicio])],
    controllers:[ExerciseControler],
    providers:[
        ListExerciseService, 
        PrismaService,
        QueryExerciseDto
    ]
})
export default class ExerciseModule {}



