import { forwardRef, MiddlewareConsumer, Module } from "@nestjs/common";
import AlunoRepository from "src/knex/aluno.repository";
import KnexModule from "src/knex/knex.module";
import CreateAlunoService from "./services/createAluno.service";
import PermissionRepository from "src/knex/permission.repository";
import { AlunoRepositoryI, PermissionRepositoryI } from "src/knex/repository";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";

@Module({
    imports:[KnexModule, UserModule],
    controllers:[AlunoController],
    providers:[
        {
            provide: AlunoRepositoryI,
            useClass: AlunoRepository
        },
        {
            provide: PermissionRepositoryI,
            useClass: PermissionRepository
        },
        CreateAlunoService,
    ],
    exports:[]
})
export default class AlunoModule {}