import { Injectable } from "@nestjs/common";
import { ArticulationE, MuscleGroupE, MusclePortionE } from "src/domain/entitys";
import MusclePortion from "src/domain/MusclePortion.entity";
import { ArticulationRepositoryI, MuscleGroupRepositoryI, MusclePortionRepositoryI } from "src/knex/repository";
import { QueryMusclePortionDto } from "../muscle.validator";
import ValidateMuscleDto from "./validateMuscleDto.service";

@Injectable()
export default class ListMusclePortionService {
    public query: QueryMusclePortionDto
    public portions: MusclePortionE[] | MusclePortionE
    public articulations: ArticulationE[] | ArticulationE
    public groups: MusclePortionE[] | MuscleGroupE

    constructor(
        private MusclePortionRepository: MusclePortionRepositoryI,
        private MuscleGroupRepository: MuscleGroupRepositoryI,
        private ArticulationRepository: ArticulationRepositoryI,
        private ValidateMuscleQueryDto: ValidateMuscleDto,
        private QueryMusclePortionDto: QueryMusclePortionDto
    ){}

    async main(args: QueryMusclePortionDto){
        this.query = (await this
                            .ValidateMuscleQueryDto
                            .setDto(this.QueryMusclePortionDto)
                            .setArgs(args)
                            .validate())
                            .getValidatedArgs();

        await this.setPortions()      

        const promises = [];
        
        if(this.query.articulations) {
            promises.push(this.setArticulations())
        }

        if(this.query.group) {
            promises.push(this.setGroups())
        }

        await Promise.all(promises)

        return this.portions
    }

    async setPortions(): Promise<void> {
        const {articulations, group, image,...query} = this.query
        
        this.portions = (await this.MusclePortionRepository
                                .findBy(query))
                                .map((portion:MusclePortionE) => new MusclePortion(portion))
    }

    async setArticulations(): Promise<void> {
        const promises = []
        for (const portion of this.portions) {
            portion.setArticulationRepository(this.ArticulationRepository)
            promises.push(portion.getArticulations())
        }

        await Promise.all(promises)
    }

    async setGroups() {
        const promises = []
        for (const portion of this.portions) {
            portion.setMuscleGroupRepository(this.MuscleGroupRepository)
            promises.push(portion.getMuscleGroup())
        }

        await Promise.all(promises)
    }
}