import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import KnexModule from "src/knex/knex.module";
import MuscleController  from "./muscle.controller";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "./muscle.validator";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports:[KnexModule],
    controllers:[MuscleController],
    providers: [  
        ListMuscleGroupService,
        ListMusclePortionService,
        PrismaService,
        QueryMuscleGroupDto,
        QueryMusclePortionDto
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
       
    }
}