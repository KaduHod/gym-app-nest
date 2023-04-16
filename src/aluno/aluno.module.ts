import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";
import CreateAlunoService from "./services/createAluno.service";
import { PrismaService } from "src/prisma/prisma.service";
import { DataSource } from "typeorm";
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
        PrismaService,
    ],
    exports:[TypeOrmModule]
})
export default class AlunoModule {}