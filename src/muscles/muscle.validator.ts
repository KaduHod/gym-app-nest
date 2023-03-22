import { IsOptional, IsString, Validate } from 'class-validator'
import { Expose } from 'class-transformer'
import { Bool, IsStringOrArrayOfStrings } from 'src/utils/validator.helper'

export class QueryMuscleGroupDto {
    @IsOptional()
    @Expose()
    id?:number

    @IsOptional()
    @Expose()
    name?: string

    @IsOptional()
    @Expose()
    image?: string

    @IsOptional()
    @Expose()
    @Validate(Bool)
    portions?: boolean = false
}

export class QueryMusclePortionDto {
    @IsOptional()
    @Expose()
    id?:number

    @IsOptional()
    @Validate(IsStringOrArrayOfStrings)
    @Expose()
    name?: string | string[]

    @IsOptional()
    @IsString()
    @Expose()
    image?: string

    @IsOptional()
    @Expose()
    @Validate(Bool)
    articulations?: boolean

    @IsOptional()
    @Expose()
    @Validate(Bool)
    group?: boolean

}