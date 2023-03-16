import { Injectable } from "@nestjs/common";
import { AlunoE } from "src/domain/entitys";
import { PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import ValidateCreateUserArgs from "src/user/services/validateCreateUserArgs.service";

@Injectable()
export default class CreateAlunoService {
    private aluno: AlunoE
    constructor(
        private UserRepository: UserRepositoryI,
        private PermissionRepository: PermissionRepositoryI,
        private ValidateCreateUserArgs: ValidateCreateUserArgs
    ){}

    async main() {
        if (!this.aluno) {
            throw new Error('Unset aluno to CreateAlunoService')
        }
    }

    async setAluno(aluno: AlunoE) {
        this.aluno = (await this
                        .ValidateCreateUserArgs
                        .setUserArgs(aluno)
                        .validate()
                    ).getValidatedUser() as AlunoE
    }
}