import { Inject, Injectable } from "@nestjs/common";
import { AlunoE, PersonalE, UserFindByArgs } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import { AlunoRepositoryI } from "./repository";
import enums from '../utils/enums'
import { Knex } from "knex";

@Injectable()
export default 
    class AlunoRepository 
    extends KnexRepository
    implements AlunoRepositoryI
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "users"
    }
    findAll(): Promise<AlunoE[]> {
        return this
                .knex(this.table)
                .select("users.*")
                .innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    "users_permissions.permission_id",
                    enums.permission.ALUNO
                ).on('query-error', this.handleError);
    }

    findBy(args:UserFindByArgs): Promise<AlunoE[]> {
        return this
                .setWhereClauses( 
                    this.knex(this.table).select("users.*"), 
                    this.setFindByArguments<UserFindByArgs>(args, this.table) 
                ).innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    "users_permissions.permission_id", 
                    enums.permission.ALUNO
                ).on('query-error', this.handleError);;
    }

    first(args:UserFindByArgs): Promise<AlunoE> {
        return this 
                .knex<AlunoE>(this.table)
                .select("users.*")
                .innerJoin(
                    "users_permissions", 
                    "users_permissions.user_id",
                    "users.id"
                ).where(
                    "users_permissions.permission_id", 
                    enums.permission.ALUNO
                ).where(
                    this.setFindByArguments<UserFindByArgs>(args, this.table)
                ).first()
                .on('query-error', this.handleError);;
    }

    async findPersonalOff(aluno: AlunoE): Promise<PersonalE> {
        return this
                .knex(this.table)
                .select('users.*')
                .first()
                .innerJoin('personal_aluno','personal_aluno.personal_id','users.id')
                .innerJoin("users_permissions",'users_permissions.user_id','users.id')
                .where('personal_aluno.aluno_id', aluno.id)
                .where('users_permissions.permission_id', enums.permission.PERSONAL)
                .on('query-error', this.handleError);
    }
}