import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import AlunoRepository from "src/knex/aluno.repository";
import CrateUserMiddleware from "src/user/createUser.middleware";
import KnexModule from "src/knex/knex.module";
import AlunoController from "./aluno.controller";
import UserRepository from "src/knex/user.repository";
import CreateAlunoService from "./services/createAluno.service";
import PermissionRepository from "src/knex/permission.repository";

@Module({
    imports:[KnexModule],
    controllers:[AlunoController],
    providers:[
        AlunoRepository, 
        UserRepository, 
        PermissionRepository, 
        CreateAlunoService
    ],
    exports:[
        AlunoRepository, 
        UserRepository, 
        PermissionRepository, 
        CreateAlunoService
    ]
})
export default class AlunoModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CrateUserMiddleware).forRoutes(
            {path:'/aluno', method: RequestMethod.POST}
        )
    }
}