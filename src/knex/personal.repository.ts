import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PersonalE, AlunoE, UserFindByArgs } from "src/entitys";
import { KnexRepository } from "./knex.repository";
import { PersonalRepositoryI } from "./repository";
import enums from '../enums'
import { Knex } from "knex";

@Injectable()
export default 
    class PersonalRepository 
    extends KnexRepository
    implements PersonalRepositoryI
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "users"
    }

    findAll(): Promise<PersonalE[]> {
        return this
                .knex(this.table)
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
        const params = {};
        for (const key in args) {
            params[`${this.table}.${key}`] = args[key]
        }
        const query = this
                        .knex(this.table)
                        .select("users.*")
                        .innerJoin(
                            "users_permissions", 
                            "users_permissions.user_id",
                            "users.id"
                        ).where({
                            ...args,
                            "users_permissions.permission_id" : enums.permission.PERSONAL
                        });
        

        return query;
    }

    first(): Promise<PersonalE> {
        throw new Error("Method not implemented.");
    }

    findAlunos(personal: PersonalE): Promise<AlunoE[]> {
        throw new Error("Method not implemented.");
    }
}