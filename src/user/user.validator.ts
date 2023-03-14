import { IsEmail, IsNotEmpty, Length, IsOptional, IsString, IsNumber } from 'class-validator'
export class CreateUserDto {
    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    name: string

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    nickname: string

    @Length(8, 20)
    @IsNotEmpty()
    @IsString()
    password: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string

    @IsOptional()
    @IsString()
    cellphone: string
}

export class UpdateUserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string

    @Length(5, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nickname: string

    @Length(8, 20)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    password: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    email: string

    @IsOptional()
    @IsString()
    cellphone: string
}