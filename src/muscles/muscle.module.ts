import { MiddlewareConsumer, Module } from "@nestjs/common";
import MuscleController  from "./muscle.controller";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articulation } from "src/articulation/Articulations.entity";
import { MusclePortion } from "src/muscles/MusclePortion.entity";
import { MuscleGroup } from "src/muscles/MuscleGroup.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Articulation, MusclePortion, MuscleGroup])],
    controllers:[MuscleController],
    providers: [  
        ListMuscleGroupService,
        ListMusclePortionService,
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
       
    }
}