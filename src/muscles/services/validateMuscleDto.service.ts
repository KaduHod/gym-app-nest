import { Injectable } from "@nestjs/common";
import { MuscleGroupE } from "src/domain/entitys";
import QueryMuscleGroupDto from "../muscle.validator";
import { validate } from 'class-validator'
import { InvalidMuscleError } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { pruneUndefineds } from "src/utils/object.helper";

type MuscleGroupDtos = QueryMuscleGroupDto

@Injectable()
export default class ValidateMuscleGroupDto {
    private args: MuscleGroupE | Partial<MuscleGroupE> | QueryMuscleGroupDto
    private dto: QueryMuscleGroupDto
    private validatedArgs: MuscleGroupDtos

    constructor(){}

    setArgs(args:MuscleGroupE | Partial<MuscleGroupE>): this {
        this.args = args
        return this
    }

    setDto<T extends MuscleGroupDtos>(dto:MuscleGroupDtos): this {
        this.dto = dto as T
        return this
    }

    async validate() {
        if (this.dto instanceof QueryMuscleGroupDto) {
            this.dto.portions = this.args.portions as boolean 
        }

        this.dto.name = this.args.name 
        this.dto.image = this.args.image
        this.dto.id = this.args.id

        const errors = await validate(this.dto)

        if(errors.length) {
            throw new InvalidMuscleError(
                errorMapper(errors)
            )
        }

        this.validatedArgs = pruneUndefineds(this.dto)

        return this
    }

    getValidatedArgs<T>() {
        return this.validatedArgs as T
    }
}

