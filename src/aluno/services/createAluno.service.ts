import { Injectable } from "@nestjs/common";
import PermissionRepository from "src/knex/permission.repository";
import UserRepository from "src/knex/user.repository";
import { AlunoE, UserE } from "src/domain/entitys";
import { CreateUserDto } from "src/user/user.validator";

@Injectable()
export default class CreateAlunoService {
    private aluno: AlunoE
    constructor(
        private UserRepository: UserRepository,
        private PermissionRepository: PermissionRepository
    ){}

    async main() {
        if (!this.aluno) {
            throw new Error('Unset user(aluno) to CreateAlunoService')
        }
    }

    async setAluno(aluno: UserE) {

    }

    async validateAluno() {
        const alunoValidated = new CreateUserDto()
    }
}