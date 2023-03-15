import { IsOptional } from 'class-validator'
import { Expose } from 'class-transformer'

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
    portions?: boolean = false
}