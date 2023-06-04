import { IsOptional, IsString, Validate, IsNumberString, IsNumber } from 'class-validator'

export class getArticulation {
    @IsNumberString()
    @IsOptional()
    id?:number | number[]

    @IsString({each:true})
    @IsOptional()
    name?:string | string[]
}