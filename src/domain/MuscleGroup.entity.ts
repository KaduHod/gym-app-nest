import { MusclePortion, MuscleGroup } from '@prisma/client';
import {IsNumber, IsString} from 'class-validator'

export default class MuscleGroupModel implements MuscleGroup  {
    @IsNumber()
    public id:number

    @IsString()
    public name: string

    @IsString()
    public image: string

    public portions?: MusclePortion[]

    created_at: Date;
    updated_at: Date;


    constructor(args:any){
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.portions = args.portions
    }
    
}