import { UserE } from "./entitys";
import { IsNumber, Length, IsNotEmpty, IsString, IsEmail, IsOptional, IsPhoneNumber, validate } from 'class-validator'
import { Expose } from 'class-transformer'
import Model from "./Entity";

export default class User extends Model implements UserE  {
    @IsNumber()
    public id:number

    @Length(5, 100)
    @IsNotEmpty()
    @IsString()
    @Expose()
    public name: string

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @Expose()
    public nickname: string

    @Length(8, 20)
    @IsNotEmpty()
    @IsString()
    @Expose()
    public password: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Expose()
    public email: string

    @IsOptional()
    @IsString()
    @Expose()
    @IsPhoneNumber("BR")
    public cellphone: string
     
    constructor(args:UserE){
        super()
        this.id = args.id
        this.name = args.name
        this.nickname = args.nickname
        this.email = args.email
        this.password = args.password
        this.cellphone = args.cellphone
    } 
}