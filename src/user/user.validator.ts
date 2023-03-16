import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber, IsPhoneNumber } from 'class-validator'
import { Expose } from 'class-transformer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUserDto{
    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @Expose()
    name: string

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @Expose()
    nickname: string

    @Length(8, 20)
    @IsNotEmpty()
    @IsString()
    @Expose()
    password: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @Expose()
    email: string

    @IsOptional()
    @IsString()
    @Expose()
    @IsPhoneNumber("BR")
    cellphone: string
}

@Injectable()
export class UpdateUserDto {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    id: number

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Expose()
    name?: string = undefined

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Expose()
    nickname?: string = undefined

    @Length(8, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Expose()
    password?: string = undefined

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Expose()
    email?: string = undefined

    @IsOptional()
    @IsString()
    @Expose()
    @IsPhoneNumber("BR")
    cellphone?: string = undefined
}

@Injectable()
export class QueryUserDto {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @IsOptional()
    id?: number = undefined

    @Length(5, 20)
    @IsString()
    @IsOptional()
    @Expose()
    name?: string = undefined

    @Length(5, 20)
    @IsString()
    @IsOptional()
    @Expose()
    nickname?: string = undefined

    @IsEmail()
    @IsString()
    @Expose()
    @IsOptional()
    email?: string = undefined

    @IsOptional()
    @IsString()
    @Expose()
    @IsPhoneNumber("BR")
    cellphone?: string = undefined
}


