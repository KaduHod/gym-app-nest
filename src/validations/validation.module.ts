import { Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {dataSourceFactory} from "src/data-source.config";
import { UniqueContraintRule } from "./rules/unique.validator";

const globalConnection:Provider = {
    provide: "GLOBAL_CONN",
    useFactory: async () => {
        return await dataSourceFactory().initialize()
    }
}

const models = []
const repositorys = []
const rules = [UniqueContraintRule]


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