import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber, IsPhoneNumber, IsDateString } from 'class-validator'
import { Expose } from 'class-transformer'
import { Injectable } from '@nestjs/common'
import { DobrasCutaneas, Medidas, Prisma, User } from '@prisma/client'

type OmitTable =  "id" | "createdAt" | "updatedAt"

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
                birthday: new Date(args.birthday)
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
                birthday: new Date(rest.birthday)
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

@Injectable()
export class CreateBasicBasicAnthropometry implements Omit<Medidas, OmitTable> {
    @IsNumber()
    @IsNotEmpty()
    userId: number 

    @IsNotEmpty()
    @IsNumber()
    weight: number 

    @IsNotEmpty()
    @IsNumber()
    height: number 

    @IsNotEmpty()
    @IsDateString()
    data: Date


    static toPrismaCreateInput(args: CreateBasicBasicAnthropometry): Prisma.MedidasCreateInput {
        const {userId, ...rest} = args
        return {
            ...rest,
            ...(rest?.data && {
                data: new Date(rest.data)
            }),
            user: {
                connect: {
                    id: userId
                }
            }
        }
    }
}
@Injectable()
export class UpdateBasicBasicAnthropometry implements Partial<Omit<Medidas, OmitTable>> {
    @IsNumber()
    @IsNotEmpty()
    id: number 

    @IsOptional()
    @IsNumber()
    weight?: number 

    @IsOptional()
    @IsNumber()
    height?: number 

    @IsOptional()
    @IsDateString()
    data?: Date


    static toPrismaUpdateInput(args: UpdateBasicBasicAnthropometry): Prisma.MedidasUpdateInput {
        const {id, ...rest} = args

        if(rest["userId"]) {
            delete rest["userId"]
        }

        return {
            ...rest,
            ...(rest?.data && {
                data: new Date(rest.data)
            })
        }
    }
}

@Injectable()
export class CreateDobras implements Partial<Omit<DobrasCutaneas, OmitTable>> {
    @IsNumber()
    @IsOptional()
    triceps?: number

    @IsNumber()
    @IsOptional()
    subscapular?: number

    @IsNumber()
    @IsOptional()
    peito?: number

    @IsNumber()
    @IsOptional()
    axilar?: number

    @IsNumber()
    @IsOptional()
    abdominal?: number

    @IsNumber()
    @IsOptional()
    supraIliaca?: number

    @IsNumber()
    @IsOptional()
    coxa?: number

    @IsNumber()
    @IsOptional()
    cintura?: number

    @IsNumber()
    @IsOptional()
    quadril?: number

    @IsNumber()
    @IsNotEmpty()
    medidaId: number

    static toPrismaCreateInput(args: CreateDobras): Prisma.DobrasCutaneasCreateInput {
        const {medidaId, ...rest} = args
        return {
            ...rest,
            medida: {
                connect: {
                    id: medidaId
                }
            }
        }
    }
}

export class UpdateDobras implements Partial<Omit<DobrasCutaneas, OmitTable | "medidaId">> {
    @IsNumber()
    @IsNotEmpty()
    id:number
    
    @IsNumber()
    @IsOptional()
    triceps?: number

    @IsNumber()
    @IsOptional()
    subscapular?: number

    @IsNumber()
    @IsOptional()
    peito?: number

    @IsNumber()
    @IsOptional()
    axilar?: number

    @IsNumber()
    @IsOptional()
    abdominal?: number

    @IsNumber()
    @IsOptional()
    supraIliaca?: number

    @IsNumber()
    @IsOptional()
    coxa?: number

    @IsNumber()
    @IsOptional()
    cintura?: number

    @IsNumber()
    @IsOptional()
    quadril?: number

    static toPrismaUpdateInput(args: UpdateDobras): Prisma.DobrasCutaneasUpdateInput {
        const {id, ...rest} = args
        return {
            ...args
        }
    }
}