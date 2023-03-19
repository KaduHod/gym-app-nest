import { Entity } from "./entity.decorator";
import { IsString, IsNumber } from 'class-validator'
import { MuscleGroupE, MusclePortionE } from "./entitys";
import Model from "./Entity";

export default class MusclePortion extends Model implements MusclePortionE {
    
    @IsNumber()
    public id:number
    
    @IsString()
    public name: string

    @IsString()
    public image: string
    
    @IsNumber()
    public muscleGroup_id: number
    
    @IsNumber()
    public muscleGroup: MuscleGroupE

    constructor(args:MusclePortionE){
        super()
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.muscleGroup_id = args.muscleGroup_id
        this.muscleGroup = args.muscleGroup
    }
}