import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import AlunoController from "./aluno.controller";
import CreateAlunoService from "./services/createAluno.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    imports:[ UserModule],
    controllers:[AlunoController],
    providers:[
        CreateAlunoService,
        PrismaService
    ],
    exports:[]
})
export default class AlunoModule {}