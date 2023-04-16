import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";
import CreateAlunoService from "./services/createAluno.service";
import { PrismaService } from "src/prisma/prisma.service";
import { DataSource } from "typeorm";
import { Aluno } from "src/domain/Alunos.entity";
import TypeOrmModule from "src/typeorm/typeorm.module";

@Module({
    imports:[ 
        UserModule,
        TypeOrmModule
    ],
    controllers:[AlunoController],
    providers:[
        CreateAlunoService,
        PrismaService,
        {
            provide:"ALUNO_REPOSITORY",
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
            inject: ['DATA_SOURCE'],
        }
    ],
    exports:[]
})
export default class AlunoModule {}