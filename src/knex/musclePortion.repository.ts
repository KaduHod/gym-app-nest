import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { Table } from "src/domain/entity.decorator";
import { MusclePortionE } from "src/domain/entitys";
import { QueryMusclePortionDto } from "src/muscles/muscle.validator";
import KnexRepository from "./knex.repository";
import { MusclePortionRepositoryI } from "./repository";

@Injectable()
@Table("muscle_portion")
export default 
        class MusclePortionRepository 
        extends KnexRepository 
        implements MusclePortionRepositoryI 
{
    private table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
    }
    findBy(args: Omit<QueryMusclePortionDto, "image" | "articulations" | "group">): Promise<any[]> {        
        return this.setWhereClauses(
            this.knex<MusclePortionE>(this.table), args
        ).on('query-error', this.handleError);
    }
    
    findAll(): Promise<MusclePortionE[]> {
        return this.knex(this.table).on('query-error', this.handleError);
    }

    async findByMuscleGroupId(muscleGroupId: number | number[]) {
        const query = this.knex<MusclePortionE>(this.table).on('query-error', this.handleError);
        if(Array.isArray(muscleGroupId)) {
            query.whereIn('muscleGroup_id', muscleGroupId)
        } else {
            query.where('muscleGroup_id', muscleGroupId)
        }
        return await query;
    }
}