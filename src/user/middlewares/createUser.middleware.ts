import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { DuplicatedEmail, DuplicatedNickname } from "src/errors/app.errors";
import { UserRepositoryI } from "src/knex/repository";
import ValidateUserDtoService from "../services/validateUserDto.service";
import { CreateUserDto } from "../user.validator";
import { UserType } from "src/domain/entitys";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export default class CrateUserMiddleware implements NestMiddleware {
    constructor(
        private PrismaService: PrismaService,
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        await this.checkNicknameAndEmail(req.body.nickname, req.body.email)
        next()       
    }

    async checkNicknameAndEmail(nickname:string, email: string): Promise<void> {
        const user = await this.PrismaService.user.findFirst({
            where: {OR: [
                {nickname},{email}
            ]}
        }); 

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