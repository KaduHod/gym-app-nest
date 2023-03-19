import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import KnexModule from "src/knex/knex.module";
import MuscleController  from "./muscle.controller";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import MusclePortionRepository from "src/knex/musclePortion.repository";
import ValidateMuscleGroupDto from "./services/validateMuscleDto.service";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "./muscle.validator";
import ListMusclePortionService from "./services/listMusclePortion.service";
import { ArticulationRepositoryI, MuscleGroupRepositoryI, MusclePortionRepositoryI } from "src/knex/repository";
import QueryMuscleGroupMiddleware from "./middlewares/queryMuscleGroup.middleware";
import QueryMusclePortionMiddleware from "./middlewares/queryMusclePortion.middleware";
import ArticulationRepository from "src/knex/articulation.repository";

@Module({
    imports:[KnexModule],
    controllers:[MuscleController],
    providers: [
        {
            provide: MuscleGroupRepositoryI,
            useClass: MuscleGroupRepository
        },
        {
            provide: MusclePortionRepositoryI,
            useClass: MusclePortionRepository
        },
        {
            provide: ArticulationRepositoryI,
            useClass: ArticulationRepository
        },  
        ListMuscleGroupService,
        ListMusclePortionService,
        ValidateMuscleGroupDto,
        QueryMuscleGroupDto,
        QueryMusclePortionDto
    ],
    exports: []
})

export default class MusclesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(QueryMuscleGroupMiddleware).forRoutes(
            {path:'muscle/group', method: RequestMethod.GET}
        ).apply(QueryMusclePortionMiddleware).forRoutes(
            {path:'muscle/portion', method: RequestMethod.GET}
        )
    }
}