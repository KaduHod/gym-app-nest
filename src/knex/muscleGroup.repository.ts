import { Inject } from "@nestjs/common";
import { Knex } from "knex";
import { MuscleGroupE } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import { MuscleGroupRepositoryI } from "./repository";

export default class MuscleGroupRepository 
        extends KnexRepository 
        implements MuscleGroupRepositoryI 
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "muscle_group"
    }

    async findAll(): Promise<MuscleGroupE[]>  {
        return this 
                    .knex<MuscleGroupE>(this.table)
                    .on('query-error', this.handleError);
    }
    
    async findBy(args: Partial<MuscleGroupE>): Promise<MuscleGroupE[]> {
        return this 
                .knex<MuscleGroupE>(this.table)
                .where(args)
                .on('query-error', this.handleError);
    }

    async first(args: Partial<MuscleGroupE>): Promise<any> {
        return this 
                .knex<MuscleGroupE>(this.table)
                .where(args)
                .first()
                .on('query-error', this.handleError);
    }
}