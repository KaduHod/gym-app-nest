import { Inject, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { Aluno } from "src/domain/Alunos";
import { PrismaService } from "src/prisma/prisma.service";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";
import { Repository } from "typeorm";

@Injectable()
export default class CreateAlunoServiceV2 {
    private user: User
    private aluno: any
    constructor(
        private CreateUserService: CreateUserService,
        @Inject("ALUNO_REPOSITORY")
        private alunoRepository: Repository<Aluno>
    ){}

    async main(aluno:User): Promise<User> {
        this.user = await this.CreateUserService.main(aluno)
        this.aluno = await this.alunoRepository.save(aluno)
        await this.CreateUserService.setPermission(permission.ALUNO)
        return this.user;
    }    
}