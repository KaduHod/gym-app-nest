import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Treinos } from "src/entitys/Treinos.entity";
import AuthGuard from "src/guards/auth.guard";
import AuthService from "../auth/auth.service";
import { MuscleGroup } from "../muscles/MuscleGroup.entity";
import { MusclePortion } from "../muscles/MusclePortion.entity";
import WorkoutsController from "./workouts.controller";

@Module({
    providers: [
        AuthService,
        AuthGuard
    ],
    imports: [
        TypeOrmModule.forFeature([
            Treinos,
            MuscleGroup,
            MusclePortion
        ])
    ],
    exports: [],
    controllers:[
        WorkoutsController
    ]
})
export default class WorkoutModule {}