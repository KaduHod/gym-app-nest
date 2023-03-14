import { IsEmail, IsNotEmpty, Length, IsOptional, IsString } from 'class-validator'
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