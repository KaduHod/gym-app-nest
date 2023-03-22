import { Module } from "@nestjs/common";
import KnexModule from "src/knex/knex.module";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";
import CreateAlunoService from "./services/createAluno.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports:[KnexModule, UserModule],
    controllers:[AlunoController],
    providers:[
        CreateAlunoService,
        PrismaService
    ],
    exports:[]
})
export default class AlunoModule {}