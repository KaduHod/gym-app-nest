import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber, IsPhoneNumber, IsDateString, IsNumberString } from 'class-validator'
import { Expose } from 'class-transformer'
import { DobrasCutaneas, Medidas, Prisma, User } from '@prisma/client'

type OmitTable =  "id" | "createdAt" | "updatedAt"


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


export class CreateBasicAnthropometry implements Omit<Medidas, OmitTable> {
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
}

export class UpdateBasicAnthropometry implements Partial<Omit<Medidas, OmitTable>> {
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


    static toPrismaUpdateInput(args: UpdateBasicAnthropometry): Prisma.MedidasUpdateInput {
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

export class CreateCircunferencias {
    @IsNotEmpty()
    @IsNumber()
    medidaId: number

    @IsNumber()
    @IsNotEmpty()
    braco: number

    @IsNumber()
    @IsNotEmpty()
    panturrilha: number 

    @IsNumber()
    @IsNotEmpty()
    torax: number

    @IsNumber()
    @IsNotEmpty()
    coxa: number

    @IsNumber()
    @IsNotEmpty()
    abdomen: number
}

export class UpdateCircunferencias {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNumber()
    @IsOptional()
    braco?: number

    @IsNumber()
    @IsOptional()
    panturrilha?: number 

    @IsNumber()
    @IsOptional()
    torax?: number

    @IsNumber()
    @IsOptional()
    coxa?: number

    @IsNumber()
    @IsOptional()
    abdomen?: number
}

export class GetUser {
    @IsNotEmpty()
    @IsNumberString()
    id:number |  string
}