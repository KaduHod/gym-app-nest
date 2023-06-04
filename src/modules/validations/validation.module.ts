import { Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Aluno } from "src/modules/aluno/Alunos.entity";
import { dataSourceFactory } from "src/data-source.config";
import { AlunoHasPersonalRule } from "./rules/alunoHasPersonal.validator";
import { ExistsModelRule } from "./rules/exists.validator";
import { UniqueContraintRule } from "./rules/unique.validator";

const globalConnection:Provider = {
    provide: "GLOBAL_CONN",
    useFactory: async () => {
        return await dataSourceFactory().initialize()
    }
}

const models = [Aluno]
const repositorys = []
const rules = [
    UniqueContraintRule,
    ExistsModelRule,
    AlunoHasPersonalRule
]


@Module({
    imports: [TypeOrmModule.forFeature(models)],
    providers: [
        globalConnection,
        ...repositorys,
        ...rules
    ],
    exports: [
        globalConnection,
        ...rules
    ]
})
export default class ValidationModule {}