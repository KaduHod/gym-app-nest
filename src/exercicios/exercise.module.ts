import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import ExerciseControler from "./exercise.controller";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Module({
    controllers:[ExerciseControler],
    providers:[
        ListExerciseService, 
        PrismaService,
        QueryExerciseDto
    ]
})
export default class ExerciseModule {}



