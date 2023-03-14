import { Inject } from "@nestjs/common";
import { Knex } from "knex";
import { MuscleGroupE } from "src/domain/entitys";
import { KnexRepository } from "./knex.repository";
import { MuscleRepositoryI } from "./repository";

export class MuscleRepository 
        extends KnexRepository 
        implements MuscleRepositoryI 
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "muscleGroup"
    }

    async findAll(): Promise<any>  {
        return this 
                    .knex(this.table)
                    .on('query-error', this.handleError);
    }
    
    async findBy(args: Partial<MuscleGroupE>): Promise<any> {
        return this 
                .knex(this.table)
                .where(args)
                .on('query-error', this.handleError);
    }
    async first(args: Partial<MuscleGroupE>): Promise<any> {
        return this 
                .knex(this.table)
                .where(args)
                .first()
                .on('query-error', this.handleError);
    }
    
}