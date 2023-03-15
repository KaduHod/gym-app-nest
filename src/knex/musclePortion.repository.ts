import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { MusclePortionE } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import { MusclePortionRepositoryI } from "./repository";

@Injectable()
export default 
        class MusclePortionRepository 
        extends KnexRepository 
        implements MusclePortionRepositoryI 
{
    private table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = 'muscle_portion'
    }

    findAll(): Promise<MusclePortionE[]> {
        return this .knex(this.table).on('query-error', this.handleError);
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