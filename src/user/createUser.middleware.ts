import { Body, Injectable, NestMiddleware, Req } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { UserE } from "src/domain/entitys";
import { HttpDuplicatedData, HttpInvalidCreateUserRequest } from "src/errors/response.errors";
import { CreateUserDto } from "./user.validator";
import { validate } from 'class-validator'
import UserRepository from "src/knex/user.repository";
import { DuplicatedEmail, DuplicatedNickname } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";

@Injectable()
export class CrateUserMiddleware implements NestMiddleware {
    constructor(
        private UserRepository:UserRepository
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        await Promise.all([
            this.validateFields(req.body),
            this.checkNicknameAndEmail(req.body.nickname, req.body.email)
        ])
        next()
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
            throw new HttpInvalidCreateUserRequest(
                errorMapper(errors)
            )
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