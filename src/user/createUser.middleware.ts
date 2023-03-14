import { Body, Injectable, NestMiddleware, Req } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { UserE } from "src/domain/entitys";
import { HttpDuplicatedData, HttpInvalidCreateUserRequest } from "src/errors/response.errors";
import { CreateUserDto } from "./user.validator";
import { validate } from 'class-validator'
import UserRepository from "src/knex/user.repository";
import { DuplicatedEmail, DuplicatedNickname } from "src/errors/app.errors";

@Injectable()
export class CrateUserMiddleware implements NestMiddleware {
    constructor(
        private UserRepository:UserRepository
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        await this.handleValidation(req.body)
        next()
    }

    async handleValidation(body: any): Promise<void> 
    {
        await Promise.all([
            this.validateFields(body),
            this.checkNicknameAndEmail(body.nickname, body.email)
        ])
    }

    async validateFields(userArgs: UserE): Promise<void> {
        const userDto = new CreateUserDto() 
        userDto.name = userArgs.name
        userDto.email = userArgs.email
        userDto.password = userArgs.password
        userDto.cellphone = userArgs.cellphone
        userDto.nickname = userArgs.nickname
        const errors = await validate(userDto)
        
        if (errors.length) {
            let formatedErrors = errors.map( err => {
                return {
                    field: err.property,
                    errors: Object.values(err.constraints)
                }
            })
            throw new HttpInvalidCreateUserRequest(formatedErrors)
        }
    }

    async checkNicknameAndEmail(nickname:string, email: string): Promise<void> {
        const user = await this.UserRepository.exists({email, nickname})
        if (user) {
            if(user.email === email) {
                throw new HttpDuplicatedData(
                    new DuplicatedEmail()
                )
            }
    
            if (user.nickname === nickname) {
                throw new HttpDuplicatedData(
                    new DuplicatedNickname()
                )
            }    
        }
    }    
}