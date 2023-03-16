import { Injectable } from "@nestjs/common";
import { AlunoE, UserE } from "src/domain/entitys";
import { PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import CreateUserService from "src/user/services/createUser.service";

@Injectable()
export default class CreateAlunoService {
    private alunoArgs: AlunoE
    constructor(
        private CreateUserService: CreateUserService,
        private PermissionRepository: PermissionRepositoryI,
    ){}

    async main(alunoArgs:AlunoE): Promise<AlunoE> {
        this.alunoArgs = alunoArgs
        await this.createAluno()
        await this.createPermission()
        return this.alunoArgs;
    }

    async createAluno() {
        this.alunoArgs = (await this.CreateUserService.main(this.alunoArgs)) as AlunoE
    }

    async createPermission() {
        await this.PermissionRepository.createAluno(this.alunoArgs)
    }
}