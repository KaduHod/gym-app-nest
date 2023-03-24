import { IsString, Validate, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer';
import { Bool, IsNumberString } from 'src/utils/validator.helper';

export class QueryExerciseDto {
    @IsOptional()
    @Expose()
    @Validate(IsNumberString)
    id?: string | string[] | number | number [];

    @Expose()
    @IsOptional()
    @IsString()
    name?: string | string[];

    @IsString()
    @Expose()
    @IsOptional()
    force?: string | string[];

    @IsString()
    @Expose()
    @IsOptional()
    link?: string | string[];

    @IsString()
    @Expose()
    @IsOptional()
    execution?: string | string[];

    @IsString()
    @Expose()
    @IsOptional()
    mechanic?: string | string[];

    @Expose()
    @IsOptional()
    @Validate(Bool)
    muscles: boolean
}