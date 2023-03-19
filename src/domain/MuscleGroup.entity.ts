import {IsNumber, IsString} from 'class-validator'
import { MuscleGroupRepositoryI, MusclePortionRepositoryI } from 'src/knex/repository';
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

    constructor(args:MuscleGroupE){
        super()
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.portions = args.portions
    }

    async getPortions(MusclePortionRepository:MusclePortionRepositoryI) {
        this.portions = (await MusclePortionRepository
                            .findByMuscleGroupId(this.id))
                            .map((portion:MusclePortionE) => new MusclePortion(portion))
    }
}