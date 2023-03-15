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
                )
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
                );
    }

    first(args:UserFindByArgs): Promise<AlunoE> {
        throw new Error("Method not implemented.");
    }

    findPersonalOff(user: AlunoE): Promise<PersonalE> {
        throw new Error("Method not implemented.");
    }
}