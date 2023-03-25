import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class CreateAlunoServiceV2 {
    private user: User
    private aluno: any
    constructor(
        private CreateUserService: CreateUserService,
        private PrismaService: PrismaService
    ){}

    async main(aluno:User): Promise<User> {
        this.user = await this.CreateUserService.main(aluno)
        this.aluno = await this.PrismaService.aluno.create({
            data: {
                User: {
                    connect: {
                        id: this.user.id
                    }
                }
            }
        })
        await this.CreateUserService.setPermission(permission.ALUNO)
        return this.aluno;
    }    
}