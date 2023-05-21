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
import { Personal } from 'src/personal/Personais.entity'
import { AlunoHasPersonal } from 'src/validations/rules/alunoHasPersonal.validator'

type OmitTable =  "id" | "createdAt" | "updatedAt"

@Unique(() => User, ["email"])
@Unique(() => User, ["nickname"])
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


@Unique(() => User, ["email"])
@Unique(() => User, ["nickname"])
@Injectable()
export class UpdateUser implements Partial<User> {    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @Exists(() => User, true)
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

@Injectable()
export class AttachAluno {
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @Exists(() => Aluno, true)
    @AlunoHasPersonal(false)
    aluno_id:number 
    
    @IsNumber()
    @IsNotEmpty()
    @Expose()
    @Exists(() => Personal, true)
    personal_id:number
}

@Injectable()
export class CreateBasicAnthropometry implements Partial<Omit<Medidas, OmitTable>> {
    @IsNumber()
    @IsNotEmpty()
    @Exists(() => User, true)
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

@Injectable()
export class UpdateBasicAnthropometry implements Partial<Omit<Medidas, OmitTable>> {
    @IsNumber()
    @IsNotEmpty()
    @Exists(() => Medidas, true)
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

@Injectable()
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
    @Exists(() => Medidas, true)
    medidaId: number
}

@Injectable()
export class UpdateDobras implements Partial<Omit<Dobrascutaneas, OmitTable | "medidaId">> {
    @IsNumber()
    @IsNotEmpty()
    @Exists(() => Dobrascutaneas, true)
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

@Injectable()
export class CreateCircunferencias {
    @IsNotEmpty()
    @IsNumber()
    @Exists(() => Medidas, true)
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

@Injectable()
export class UpdateCircunferencias {
    @IsNotEmpty()
    @IsNumber()
    @Exists(() => Circunferencias, true)
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