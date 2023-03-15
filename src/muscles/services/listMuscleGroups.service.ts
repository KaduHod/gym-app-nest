import { Injectable } from "@nestjs/common";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";
import MusclePortionRepository from "src/knex/musclePortion.repository";
import QueryMuscleGroupDto from "../muscle.validator";
import { validate } from 'class-validator'
import { pruneUndefineds } from "src/utils/object.helper";
import { errorMapper } from "src/utils/validator.helper";
import { isString } from "src/utils/string.helper";
import { isNumber } from "src/utils/number.helper";
import { MuscleGroupE } from "src/domain/entitys";

@Injectable()
export default class ListMuscleGroupService {
    private query:QueryMuscleGroupDto
    constructor(
        private MuscleGroupRepository: MuscleGroupRepository,
        private MusclePortionRepository: MusclePortionRepository
    ){}

    async main(): Promise<MuscleGroupE[]> {
        if(!this.query) {
            throw new Error('Must set query property for ListMuscleGroupService')
        }
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

    async setQuery(query: QueryMuscleGroupDto): Promise<void> {
        let validatedQuery = await this.validateQuery(query)
        this.query = validatedQuery
    }

    async validateQuery(query:QueryMuscleGroupDto): Promise<Partial<QueryMuscleGroupDto>>{
        const validateDto = new QueryMuscleGroupDto()
        validateDto.id = query.id
        validateDto.name = query.name
        validateDto.portions = query.portions

        if (isNumber(query.portions)) {
            validateDto.portions = query.portions === 1
        } else if (isString(query.portions)) {
            validateDto.portions = query.portions === "1" || query.portions === "true"
        } else {
            validateDto.portions = false
        }

        const errors = await validate(validateDto)

        if (errors.length) {
            throw new Error(
                errorMapper(errors).toString()
            )
        }

        return pruneUndefineds(validateDto)
    }
}