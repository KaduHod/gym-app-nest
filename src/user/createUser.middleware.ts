import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { HttpDuplicatedData } from "src/errors/response.errors";
import { DuplicatedEmail, DuplicatedNickname } from "src/errors/app.errors";
import { UserRepositoryI } from "src/knex/repository";
import ValidateCreateUserArgs from "./services/validateCreateUserArgs.service";

@Injectable()
export default class CrateUserMiddleware implements NestMiddleware {
    constructor(
        private UserRepository: UserRepositoryI,
        private ValidateCreateUserArgs: ValidateCreateUserArgs
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        await Promise.all([
            this.ValidateCreateUserArgs.setUserArgs(req.body).validate(),
            this.checkNicknameAndEmail(req.body.nickname, req.body.email)
        ])
        req.body = this.ValidateCreateUserArgs.getValidatedUser()
        next()
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