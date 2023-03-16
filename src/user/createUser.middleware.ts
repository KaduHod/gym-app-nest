import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { HttpDuplicatedData, HttpInvalidUpdateUserRequest } from "src/errors/response.errors";
import { DuplicatedEmail, DuplicatedNickname, InvalidUserError, UnhandledError } from "src/errors/app.errors";
import { UserRepositoryI } from "src/knex/repository";
import ValidateUserDtoService from "./services/validateUserDto.service";
import { CreateUserDto } from "./user.validator";
import { UserType } from "src/domain/entitys";

@Injectable()
export default class CrateUserMiddleware implements NestMiddleware {
    constructor(
        private UserRepository: UserRepositoryI,
        private ValidateUserDtoService: ValidateUserDtoService,
        private CreateUserDto: CreateUserDto
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        await Promise.all([
            this.ValidateUserDtoService
                .setDto(this.CreateUserDto)
                .setArgs(req.body as  UserType)
                .validate(),
            this.checkNicknameAndEmail(req.body.nickname, req.body.email)
        ])
        req.body = this.ValidateUserDtoService.getValidatedArgs()
        next()       
    }

    async checkNicknameAndEmail(nickname:string, email: string): Promise<void> {
        const user = await this.UserRepository.exists({email, nickname})
        if (user) {
            if(user.email === email) {
                throw new DuplicatedEmail()
            }
            if (user.nickname === nickname) {
                throw new DuplicatedNickname()
            }    
        }
    }    
}