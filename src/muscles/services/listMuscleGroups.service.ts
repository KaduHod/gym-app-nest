import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { MuscleGroupE } from "src/domain/entitys";
import ValidateMuscleDto from "./validateMuscleDto.service";
import { MuscleGroupRepositoryI, MusclePortionRepositoryI } from "src/knex/repository";

@Injectable()
export default class ListMuscleGroupService {
    private query:QueryMuscleGroupDto
    constructor(
        private MuscleGroupRepository: MuscleGroupRepositoryI,
        private MusclePortionRepository: MusclePortionRepositoryI,
        private ValidateMuscleDtoService: ValidateMuscleDto,
        private QueryMuscleGroupDto: QueryMuscleGroupDto
    ){}

    async main(query: QueryMuscleGroupDto): Promise<MuscleGroupE[]> {
        this.query = (await this
                                .ValidateMuscleDtoService
                                .setArgs(query as any)
                                .setDto(this.QueryMuscleGroupDto)
                                .validate()
                    ).getValidatedArgs<QueryMuscleGroupDto>();

        if(this.query.portions) {
            return this.getMusclesWithPortions()
        } else {
            return this.getMuscles()
        }
    }

    async getMuscles(): Promise<MuscleGroupE[]> {
        const {portions, ...q} = this.query
        return this.MuscleGroupRepository.findBy(q as Partial<MuscleGroupE>)
    }

    async getMusclesWithPortions(): Promise<MuscleGroupE[]> {
        const {portions, ...q} = this.query
        let [ muscleGroups,musclePortions ] = await Promise.all([
            this.MuscleGroupRepository.findBy(q as Partial<MuscleGroupE>),
            q.id ? this.MusclePortionRepository.findByMuscleGroupId(q.id) : this.MusclePortionRepository.findAll()
        ])

        return muscleGroups.map( (group) => {
            group.portions = []
            for (let index = 0; index < musclePortions.length; index++){
                if(musclePortions[index].muscleGroup_id !== group.id) {
                    continue;
                }
                const [portion] = musclePortions.splice(index,1)
                group.portions.push(portion)
                index--
            }
            return group
        })
    }
}