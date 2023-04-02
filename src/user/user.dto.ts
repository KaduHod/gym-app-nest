import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber, IsPhoneNumber, IsDateString } from 'class-validator'
import { Expose } from 'class-transformer'
import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'


@Injectable()
export class CreateUser implements Partial<User> {
    @Length(5, 100)
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

    @IsDateString()
    @Expose()
    @IsOptional()
    birthday?: Date

    @IsOptional()
    @IsString()
    @Expose()
    @IsPhoneNumber("BR")
    cellphone: string


    static toPrismaCreateInput(args:CreateUser): Prisma.UserCreateInput {
        return {
            ...args,
            ...(args?.birthday && {
                birthday: (new Date(args.birthday))
            })
        }
    }
}

@Injectable()
export class UpdateUser implements Partial<User> {    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    id: number

    @Length(5, 100)
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

    @IsDateString()
    @Expose()
    @IsOptional()
    birthday?: Date

    static toPrismaUpdateInput(args:UpdateUser):Prisma.UserUpdateInput {
        const {id, ...rest} = args
        return {
            ...rest,
            ...(rest?.birthday && {
                birthday: (new Date(rest.birthday))
            })
        }
    }
}

@Injectable()
export class QueryUser {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @IsOptional()
    id?: number = undefined

    @Length(5, 100)
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

@Injectable()
export class AttachAluno {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    aluno_id:number 
    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    personal_id:number
}