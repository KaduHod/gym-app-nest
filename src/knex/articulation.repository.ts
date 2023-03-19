import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { Table } from "src/domain/entity.decorator";
import { ArticulationE } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import { ArticulationRepositoryI } from './repository'

@Injectable()
@Table("articulations")
export default class ArticulationRepository extends KnexRepository implements ArticulationRepositoryI
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex) {
        super()
    }
    findByPortion(args: Partial<ArticulationE>, portionId: number | number[]) {
        const query = this
                .knex(this.table)
                .select(`${this.table}.*`,"articulation_muscle.muscle_id as portion_id")
                .innerJoin("articulation_muscle","articulation_muscle.articulation_id","articulations.id")
                .on('query-error', this.handleError);
        
        if(Array.isArray(portionId)) {
            query.whereIn("articulation_muscle.muscle_id", portionId)
        } else {
            query.where("articulation_muscle.muscle_id", portionId)
        }
        return query
    }

    async findBy(args: Partial<ArticulationE>) {
        return this.setWhereClauses(
            this.knex<ArticulationE>(this.table),
            args
        ).on('query-error', this.handleError);
    }
}