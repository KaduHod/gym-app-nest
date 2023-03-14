import { Inject, Injectable } from "@nestjs/common";
import { PersonalE, AlunoE, UserFindByArgs, UserE } from "src/domain/entitys";
import { KnexRepository } from "./knex.repository";
import { PersonalRepositoryI } from "./repository";
import enums from '../utils/enums'
import { Knex } from "knex";

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
                )
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
                );
    }

    first(args:UserFindByArgs): Promise<PersonalE> {
        throw new Error("Method not implemented.");
    }

    findAlunos(personal: PersonalE): Promise<AlunoE[]> {
        throw new Error("Method not implemented.");
    }
}