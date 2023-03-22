import { Entity } from "./entity.decorator";
import { IsString, IsNumber } from 'class-validator'
import { ArticulationE, MuscleGroupE, MusclePortionE } from "./entitys";
import Model, { Mapped } from "./Entity";
import { Inject } from "@nestjs/common";
import { Knex } from "knex";
import { ArticulationRepositoryI, MuscleGroupRepositoryI } from "src/knex/repository";
import MuscleGroupRepository from "src/knex/muscleGroup.repository";

export default class MusclePortion extends Model implements MusclePortionE, Mapped {
    
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

    private muscleGroupRepository: MuscleGroupRepositoryI
    private articulationRepository: ArticulationRepositoryI

    constructor(args:MusclePortionE){
        super()
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.muscleGroup_id = args.muscleGroup_id
        this.muscleGroup = args.muscleGroup
    }

    setMuscleGroupRepository(muscleGroupRepository:MuscleGroupRepositoryI) {
        this.muscleGroupRepository = muscleGroupRepository
    }

    setArticulationRepository(articulationRepository:ArticulationRepositoryI) {
        this.articulationRepository = articulationRepository
    }

    async getMuscleGroup(): Promise<MuscleGroupE> {
        this.muscleGroup = await this.muscleGroupRepository
                            .findBy({id: this.muscleGroup_id})
        return this.muscleGroup;
    }

    async getArticulations(): Promise<ArticulationE[] | ArticulationE> {
        this.articulations = await this.articulationRepository.findByPortion({}, this.id)
        return this.articulations;
    }

    mapToHttp() {
        const {
            muscleGroupRepository,
            articulationRepository,
            ...rest 
        } = this
        return rest
    }
}