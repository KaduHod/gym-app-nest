import { forwardRef, MiddlewareConsumer, Module } from "@nestjs/common";
import AlunoRepository from "src/knex/aluno.repository";
import KnexModule from "src/knex/knex.module";
import CreateAlunoService from "./services/createAluno.service";
import PermissionRepository from "src/knex/permission.repository";
import { AlunoRepositoryI, PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
import UserRepository from "src/knex/user.repository";
import CreateUserService from "src/user/services/createUser.service";
import ValidateUserDtoService from "src/user/services/validateUserDto.service";
import UpdateUserService from "src/user/services/updateUser.service";

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
        UpdateUserDto,
        CreateUserService,
        UpdateUserService,
        ValidateUserDtoService
    ],
    exports:[
        UpdateUserService,
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