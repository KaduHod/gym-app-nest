import { Injectable } from "@nestjs/common";
import { AlunoE } from "src/domain/entitys";
import { PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import ValidateUserDtoService from "src/user/services/validateUserDto.service";
import { CreateUserDto } from "src/user/user.validator";

@Injectable()
export default class CreateAlunoService {
    private aluno: AlunoE
    constructor(
        private UserRepository: UserRepositoryI,
        private PermissionRepository: PermissionRepositoryI,
        private ValidateUserDtoService: ValidateUserDtoService,
        private CreateUserDto: CreateUserDto
    ){}

    async main() {
        if (!this.aluno) {
            throw new Error('Unset aluno to CreateAlunoService')
        }
    }

    async setAluno(aluno: AlunoE) {
        this.aluno = (await this
                        .ValidateUserDtoService
                        .setDto(this.CreateUserDto)
                        .setArgs(aluno)
                        .validate()
                    ).getValidatedArgs() as AlunoE
    }

    
}