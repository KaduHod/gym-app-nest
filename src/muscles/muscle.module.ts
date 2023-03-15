import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import KnexModule from "src/knex/knex.module";
import MuscleController  from "./muscle.controller";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import QueryMuscleMiddleware from "./queryMuscle.middleware";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import MusclePortionRepository from "src/knex/musclePortion.repository";

@Module({
    imports:[KnexModule],
    controllers:[MuscleController],
    providers: [
        MuscleGroupRepository, 
        MusclePortionRepository, 
        ListMuscleGroupService
    ],
    exports: [
        MuscleGroupRepository, 
        MusclePortionRepository, 
        ListMuscleGroupService
    ]
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(QueryMuscleMiddleware).forRoutes(
            {path:'muscle/group', method: RequestMethod.GET}
        )
    }
}