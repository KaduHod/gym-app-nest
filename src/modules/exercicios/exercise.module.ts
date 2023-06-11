import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppModule } from "src/app.module";
import { ArticulationMovement } from "src/entitys/articulationMovement.entity";
import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import AuthGuard from "src/guards/auth.guard";
import { Exercicio } from "src/modules/exercicios/Exercicios.entity";
import { Articulation } from "../articulation/Articulations.entity";
import AuthService from "../auth/auth.service";
import { Movements } from "../movements/Movements.entity";
import { MuscleGroup } from "../muscles/MuscleGroup.entity";
import { MusclePortion } from "../muscles/MusclePortion.entity";
import ExerciseControler from "./exercise.controller";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Exercicio, 
            MuscleGroup, 
            MusclePortion, 
            Articulation, 
            Movements,
            ArticulationMovement,
            ArticulationMovementPortion
        ]),
    ],
    controllers:[ExerciseControler],
    providers:[
        ListExerciseService, 
        QueryExerciseDto,
        AuthGuard,
        AuthService
    ]
})
export default class ExerciseModule {}



