import { Entity, Table } from "./entity.decorator";
import { UserE } from "./entitys";
import { Length, IsNotEmpty, IsString, IsEmail, IsOptional, IsPhoneNumber, validate } from 'class-validator'
import { Expose } from 'class-transformer'


@Entity()
@Table("users")
export default class User implements UserE {
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
        this.name = args.name
        this.nickname = args.nickname
        this.email = args.email
        this.password = args.password
        this.cellphone = args.cellphone
    }

    public async validate(): Promise<this> {
        await validate(this)
        return this
    }
    
}