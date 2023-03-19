import { Module } from "@nestjs/common";
import ArticulationRepository from "src/knex/articulation.repository";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import { ArticulationRepositoryI, MuscleGroupRepositoryI } from "src/knex/repository";
import MusclePortion from "./MusclePortion.entity";

@Module({
    providers:[
        {
            provide:MuscleGroupRepositoryI,
            useClass: MuscleGroupRepository  
        },
        {
            provide: ArticulationRepositoryI,
            useClass: ArticulationRepository
        },
        // MusclePortion
    ],
    // exports:[MusclePortion]
})
export default class DomainModule {

}