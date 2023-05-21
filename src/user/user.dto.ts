import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber, IsPhoneNumber, IsDateString, IsNumberString } from 'class-validator'
import { Expose } from 'class-transformer'
import { User } from 'src/user/Users.entity'
import { Medidas } from 'src/medidas/Medidas.entity'
import { Circunferencias } from 'src/medidas/Circunferencias.entity'
import { Dobrascutaneas } from 'src/medidas/Dobrascutaneas.entity'
import { Injectable } from '@nestjs/common'
import { Unique } from 'src/validations/rules/unique.validator'
import { Exists } from 'src/validations/rules/exists.validator'
import { Aluno } from 'src/aluno/Alunos.entity'

type OmitTable =  "id" | "createdAt" | "updatedAt"

@Unique({
    classConstructor: () => User,
    fields: ["email"]
})
@Unique({
    classConstructor: () => User,
    fields: ["nickname"]
})
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

}

@Unique({
    classConstructor: () => User,
    fields: ["email"]
})
@Unique({
    classConstructor: () => User,
    fields: ["nickname"]
})
export class UpdateUser implements Partial<User> {    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @Exists(() => User)
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
    @Exists(() => Aluno)
    aluno_id:number 
    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    personal_id:number
}


export class CreateBasicAnthropometry implements Omit<Medidas, OmitTable> {
    circunferencias: Circunferencias
    dobrascutaneas: Dobrascutaneas
    user: User
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
}


export class CreateDobras implements Partial<Omit<Dobrascutaneas, OmitTable>> {
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

export class UpdateDobras implements Partial<Omit<Dobrascutaneas, OmitTable | "medidaId">> {
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