import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";
import CreateAlunoService from "./services/createAluno.service";
import { Aluno } from "src/entitys/Alunos.entity";
import {TypeOrmModule} from "@nestjs/typeorm"


@Module({
    imports:[ 
        UserModule,
        TypeOrmModule.forFeature([Aluno])
    ],
    controllers:[AlunoController],
    providers:[
        CreateAlunoService,
    ],
    exports:[TypeOrmModule]
})
export default class AlunoModule {}