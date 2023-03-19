import { Module } from "@nestjs/common";
import ArticulationRepository from "src/knex/articulation.repository";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import { ArticulationRepositoryI, MuscleGroupRepositoryI } from "src/knex/repository";

@Module({
    providers:[
        {
            provide:MuscleGroupRepositoryI,
            useClass: MuscleGroupRepository  
        },
        {
            provide: ArticulationRepositoryI,
            useClass: ArticulationRepository
        }
    ]
})
export default class DomainModule {

}