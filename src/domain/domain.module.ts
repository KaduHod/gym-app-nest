import { Module } from "@nestjs/common";
import AlunoRepository from "src/knex/aluno.repository";
import KnexModule from "src/knex/knex.module";
import PersonalRepository from "src/knex/personal.repository";
import { AlunoRepositoryI, PersonalRepositoryI } from "src/knex/repository";

@Module({
    imports:[KnexModule],
    providers:[
        {
            provide: PersonalRepositoryI,
            useClass: PersonalRepository
        },
        {
            provide: AlunoRepositoryI,
            useClass: AlunoRepository
        }
    ],
})
export default class DomainModule {

}