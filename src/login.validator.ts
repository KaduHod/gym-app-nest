import {IsString, IsEmail} from 'class-validator'

export default class LoginRequest {
    @IsString()
    @IsEmail()
    email: string

    @IsString()
    password:string
}