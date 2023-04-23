import { MiddlewareConsumer, Module } from "@nestjs/common";
import MuscleController  from "./muscle.controller";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { PrismaService } from "src/prisma/prisma.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articulation } from "src/entitys/Articulations.entity";
import { MusclePortion } from "src/entitys/MusclePortion.entity";
import { MuscleGroup } from "src/entitys/MuscleGroup.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Articulation, MusclePortion, MuscleGroup])],
    controllers:[MuscleController],
    providers: [  
        ListMuscleGroupService,
        ListMusclePortionService,
        PrismaService,
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
       
    }
}