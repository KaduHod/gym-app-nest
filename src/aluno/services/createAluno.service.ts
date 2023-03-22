import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class CreateAlunoServiceV2 {
    private aluno: User
    constructor(
        private CreateUserService: CreateUserService
    ){}

    async main(aluno:User): Promise<User> {
        this.aluno = await this.CreateUserService.main(aluno)
        await this.CreateUserService.setPermission(permission.ALUNO)
        return this.aluno;
    }    
}