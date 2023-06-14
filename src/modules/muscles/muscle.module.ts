import { MiddlewareConsumer, Module } from "@nestjs/common";
import MuscleController  from "./muscle.controller";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articulation } from "src/modules/articulation/Articulations.entity";
import { MusclePortion } from "./MusclePortion.entity";
import { MuscleGroup } from "./MuscleGroup.entity";
import { Movements } from "../movements/Movements.entity";
import { ArticulationMovement } from "src/entitys/ArticulationMovement.entity";
import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import AuthService from "../auth/auth.service";
import AuthGuard from "src/guards/auth.guard";

@Module({
    imports:[
        TypeOrmModule.forFeature([
            Articulation, 
            MusclePortion, 
            MuscleGroup, 
            MusclePortion, 
            Movements,
            ArticulationMovement,
            ArticulationMovementPortion
        ])
    ],
    controllers:[MuscleController],
    providers: [  
        ListMuscleGroupService,
        ListMusclePortionService,
        AuthService,
        AuthGuard
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
       
    }
}