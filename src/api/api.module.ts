import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import AuthGuard from "src/guards/auth.guard";
import { MuscleGroup } from "src/modules/muscles/MuscleGroup.entity";
import { MusclePortion } from "src/modules/muscles/MusclePortion.entity";
import ListMuscleGroupService from "src/modules/muscles/services/listMuscleGroups.service";
import ListMusclePortionService from "src/modules/muscles/services/listMusclePortion.service";
import AuthService from "../modules/auth/auth.service";
import ApiMusclesController from "./muscles.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            MuscleGroup, MusclePortion
        ])
    ],
    controllers: [ApiMusclesController],
    providers: [
        AuthGuard,
        AuthService,
        ListMuscleGroupService,
        ListMusclePortionService
    ]
})
export default class ApiModule {}