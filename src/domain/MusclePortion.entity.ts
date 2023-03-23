import { IsString, IsNumber } from 'class-validator'
import { MusclePortion, MuscleGroup, Articulation } from '@prisma/client';




export default class MusclePortionModel implements MusclePortion  {
    
    @IsNumber()
    public id:number
    
    @IsString()
    public name: string

    @IsString()
    public image: string
    
    @IsNumber()
    public muscleGroup_id: number

    public articulations: Articulation[]
    
    public muscleGroup: MuscleGroup

    public created_at: Date;
    
    public updated_at: Date;

    constructor(args:MusclePortion){
        this.id = args.id
        this.name = args.name
        this.image = args.image
        this.muscleGroup_id = args.muscleGroup_id
    }
    
}