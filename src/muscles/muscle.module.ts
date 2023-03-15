import { Module } from "@nestjs/common";
import { KnexModule } from "src/knex/knex.module";


@Module({
    imports:[KnexModule],
    controllers:[],
    providers: []
})

export default class MusclesModule {}