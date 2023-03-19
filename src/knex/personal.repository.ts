import { Inject, Injectable } from "@nestjs/common";
import { PersonalE, AlunoE, UserFindByArgs, UserE } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import enums from '../utils/enums'
import { Knex } from "knex";
import { PersonalRepositoryI } from "./repository";

@Injectable()
export default 
    class PersonalRepository 
    extends KnexRepository
    implements PersonalRepositoryI
{
    public table:string
    constructor(
        @Inject('KnexConnection') private knex:Knex
    ){
        super()
        this.table = "users"
    }

    findAll(): Promise<PersonalE[]> {
        return this
                .knex<UserE>(this.table)
                .select("users.*")
                .innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    "users_permissions.permission_id",
                    enums.permission.PERSONAL
                ).on('query-error', this.handleError);
    }

    findBy(args:UserFindByArgs): Promise<PersonalE[]> {       
        return this
                .setWhereClauses( 
                    this.knex<UserE>(this.table).select("users.*"), 
                    this.setFindByArguments<UserFindByArgs>(args, this.table) 
                ).innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    "users_permissions.permission_id", 
                    enums.permission.PERSONAL
                ).on('query-error', this.handleError);;
    }

    first(args:UserFindByArgs): Promise<PersonalE> {
        return this 
                .knex<PersonalE>(this.table)
                .select("users.*")
                .innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    this.setFindByArguments<UserFindByArgs>(args, this.table)
                ).where(
                    "users_permissions.permission_id", 
                    enums.permission.PERSONAL
                ).first()
                .on('query-error', this.handleError);
    }

    findAlunos(personal: PersonalE): Promise<PersonalE[]> {
        return this 
                .knex(this.table)
                .select('users.*')
                .innerJoin('personal_aluno', 'personal_aluno.personal_id','users.id')
                .where('personal_aluno.personal_id', personal.id)
                .on('query-error', this.handleError);

    }

    async attachAluno(personal:PersonalE, aluno:AlunoE) {
        return this
            .knex('personal_aluno')
            .insert({aluno_id:aluno.id, personal_id:personal.id})
            .on('query-error', this.handleError);
    }
}