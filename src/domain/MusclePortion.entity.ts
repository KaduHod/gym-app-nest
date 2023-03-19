import { Entity } from "./entity.decorator";
import { IsString, IsNumber } from 'class-validator'
import { ArticulationE, MuscleGroupE, MusclePortionE } from "./entitys";
import Model from "./Entity";
import { Inject } from "@nestjs/common";
import { Knex } from "knex";
import { ArticulationRepositoryI, MuscleGroupRepositoryI } from "src/knex/repository";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";

export default class MusclePortion extends Model implements MusclePortionE {
    
    @IsNumber()
    public id:number
    
    @IsString()
    public name: string

    @IsString()
    public image: string
    
    @IsNumber()
    public muscleGroup_id: number

    public articulations: ArticulationE[]
    
    public muscleGroup: MuscleGroupE

    constructor(args:MusclePortionE){
        super()
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.muscleGroup_id = args.muscleGroup_id
        this.muscleGroup = args.muscleGroup
    }

    async getMuscleGroup(MuscleGroupRepository:MuscleGroupRepositoryI): Promise<this> {
        this.muscleGroup = await MuscleGroupRepository
                            .findBy({id: this.muscleGroup_id})
        return this;
    }

    async getArticulations(ArticulationRepository:ArticulationRepositoryI): Promise<this> {
        this.articulations = await ArticulationRepository.findByPortion({}, this.id)
        return this;
    }
}