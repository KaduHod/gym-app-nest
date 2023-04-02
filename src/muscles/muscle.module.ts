import { MiddlewareConsumer, Module } from "@nestjs/common";
import MuscleController  from "./muscle.controller";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import * as Dto from "./muscle.validator";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports:[],
    controllers:[MuscleController],
    providers: [  
        ListMuscleGroupService,
        ListMusclePortionService,
        PrismaService,
        Dto.QueryMuscleGroupDto,
        Dto.QueryMusclePortionDto
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
       
    }
}