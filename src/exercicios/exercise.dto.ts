import { IsString, Validate, IsOptional } from 'class-validator'
import { Expose } from 'class-transformer';
import { Bool, IsNumberString } from 'src/utils/validator.helper';
import { In, SelectQueryBuilder } from 'typeorm';
import { Exercicio } from 'src/entitys/Exercicios.entity';

export class QueryExerciseDto {
    @IsOptional()
    @Expose()
    @Validate(IsNumberString)
    id?: string | string[] | number | number [];

    @Expose()
    @IsOptional()
    @IsString({each:true})
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
    muscles?: boolean

    @Expose()
    @IsOptional()
    //@Validate(IsValidRole)
    role?: string

    static toWhereArgs(
        builder:SelectQueryBuilder<Exercicio>, 
        args:QueryExerciseDto, 
        alias?:string
    ): void {
        const {
            id, muscles,  ...rest
        } = args

        Object.keys(rest).forEach( key => {
            const keyF = alias ? `${alias}.${key}` : key;
            Array.isArray(args[key]) && key !== 'id'
                ? builder.where(`${keyF} IN (:...values)`, {values: args[key]})
                : builder.where(`${keyF} = :key`, {key: args[key]});
        })

        if(id) {
            const keyF = alias ? `${alias}.id` : "id";
            if(typeof id === "string") {
                builder.where(`${keyF} = :id`, {id: Number(id)})
            }

            if(typeof id === "number") {
                builder.where(`${keyF} = :id`, {id})
            }

            if (Array.isArray(id) ) {
                builder.where(`${keyF} IN (:...values)`, {values: id.map(Number)})
            }
            
        }
    }   
}