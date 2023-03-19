import {IsNumber, IsString} from 'class-validator'
import { MusclePortionRepositoryI } from 'src/knex/repository';
import Model from "./Entity";
import { MuscleGroupE, MusclePortionE } from "./entitys";
import MusclePortion from './MusclePortion.entity';

export default class MuscleGroup extends Model implements MuscleGroupE {
    @IsNumber()
    public id:number

    @IsString()
    public name: string

    @IsString()
    public image: string

    public portions?: MusclePortionE[]

    private musclePortionRepository:MusclePortionRepositoryI

    constructor(args:MuscleGroupE){
        super()
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.portions = args.portions
    }


    setMusclePortionRepository(musclePortionRepository:MusclePortionRepositoryI) {
        this.musclePortionRepository = musclePortionRepository 
    }

    async getPortions() {
        this.portions = (await this.musclePortionRepository
                            .findByMuscleGroupId(this.id))
                            .map((portion:MusclePortionE) => new MusclePortion(portion))
    }
}