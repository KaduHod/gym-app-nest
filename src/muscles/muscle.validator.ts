import { IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'
import PortionBool from './validators/queryPortions.validator'
import { Validate } from 'class-validator';

export default class QueryMuscleGroupDto {
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
    @Validate(PortionBool)
    portions?: boolean = false
}