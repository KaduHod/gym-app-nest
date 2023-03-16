import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import AlunoRepository from "src/knex/aluno.repository";
import CrateUserMiddleware from "src/user/createUser.middleware";
import KnexModule from "src/knex/knex.module";
import AlunoController from "./aluno.controller";
import UserRepository from "src/knex/user.repository";
import CreateAlunoService from "./services/createAluno.service";
import PermissionRepository from "src/knex/permission.repository";
import { AlunoRepositoryI, PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import { CreateUserDto } from "src/user/user.validator";
import ValidateUserDtoService from "src/user/services/validateUserDto.service";

@Module({
    imports:[KnexModule],
    providers:[
        {
            provide:AlunoRepositoryI,
            useClass:AlunoRepository
        },
        {
            provide: UserRepositoryI,
            useClass: UserRepository
        }, 
        {
            provide:PermissionRepositoryI,
            useClass:PermissionRepository,
        },  
        CreateAlunoService,
        CreateUserDto,
        ValidateUserDtoService
    ],
    exports:[
        AlunoRepositoryI, 
        CreateAlunoService,
        UserRepositoryI, 
        PermissionRepositoryI, 
    ]
})
export default class AlunoModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
}