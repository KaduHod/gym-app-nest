import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { MuscleGroupE } from "src/domain/entitys";
import ValidateMuscleDto from "./validateMuscleDto.service";
import { MuscleGroupRepositoryI, MusclePortionRepositoryI } from "src/knex/repository";
import MuscleGroup from "src/domain/MuscleGroup.entity";

@Injectable()
export default class ListMuscleGroupService {
    private query:QueryMuscleGroupDto
    private groups: MuscleGroup | MuscleGroup[]
    constructor(
        private MuscleGroupRepository: MuscleGroupRepositoryI,
        private MusclePortionRepository: MusclePortionRepositoryI,
        private ValidateMuscleDtoService: ValidateMuscleDto,
        private QueryMuscleGroupDto: QueryMuscleGroupDto
    ){}

    async main(query: QueryMuscleGroupDto): Promise<MuscleGroup | MuscleGroup[]> {
        this.query = (await this
                                .ValidateMuscleDtoService
                                .setArgs(query as any)
                                .setDto(this.QueryMuscleGroupDto)
                                .validate()
                    ).getValidatedArgs<QueryMuscleGroupDto>();

        await this.getMuscles()

        if(this.query.portions) {
            await this.getPortions()
        }

        return this.groups
    }

    async getMuscles(): Promise<void> {
        const {portions, ...q} = this.query
        this.groups = (await this
                            .MuscleGroupRepository
                            .findBy(q as Partial<MuscleGroupE>))
                            .map((group:MuscleGroupE) => new MuscleGroup(group))
    }

    async getPortions(): Promise<void>{
        if(Array.isArray(this.groups)){
            const promises = []
            for (const group of this.groups) {
                promises.push(group.getPortions(this.MusclePortionRepository))
            }
            await Promise.all(promises)
        } else {
            await this.groups.getPortions(this.MusclePortionRepository)
        }
    }
}