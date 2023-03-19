import { Injectable } from "@nestjs/common";
import { ArticulationE, MuscleGroupE, MusclePortionE } from "src/domain/entitys";
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
        
        this.adapter()

        return this.portions
    }

    async setPortions(): Promise<void> {
        const {articulations, group, image,...query} = this.query
        
        this.portions = await this.MusclePortionRepository.findBy(query)
    }

    async setArticulations(): Promise<void> {
        this.articulations = await this
                                    .ArticulationRepository
                                    .findByPortion({}, this.portions.map(({id}) => id))
    }

    async setGroups() {
        const query = {
            id: this.portions.map(({muscleGroup_id}) => muscleGroup_id )
        }
        this.groups = await this.MuscleGroupRepository.findBy(query)
    }

    adapter() {
        for (const portion of this.portions) {
            if(this.query.group) {
                portion.muscleGroup = this.groups.find( ({id}) => id === portion.muscleGroup_id )
            }
            if(this.query.articulations) {
                portion.articulations = this.articulations.filter(({portion_id}) => portion_id = portion.id)
            }
        }
    }
}