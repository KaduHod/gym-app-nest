import { Injectable } from "@nestjs/common";
import { MuscleGroupE } from "src/domain/entitys";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "../muscle.validator";
import { validate } from 'class-validator'
import { InvalidMuscleError } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { pruneUndefineds } from "src/utils/object.helper";
import { toBool } from "src/utils/string.helper";

type MuscleGroupDtos = QueryMuscleGroupDto | QueryMusclePortionDto

@Injectable()
export default class ValidateMuscleDto {
    private args: MuscleGroupE | Partial<MuscleGroupE> | QueryMuscleGroupDto
    private dto: QueryMuscleGroupDto | QueryMusclePortionDto
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
            this.dto.portions = typeof this.args.portions === "boolean" ? this.args.portions : toBool(this.args.portions);
        }

        if (this.dto instanceof QueryMusclePortionDto) {     
            this.dto.articulations =  typeof this.args.articulations === "boolean" ? this.args.articulations : toBool(this.args.articulations);

            this.dto.group =  typeof this.args.group === "boolean" ? this.args.group : toBool(this.args.group);
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

