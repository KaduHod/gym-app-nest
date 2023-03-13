import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { UserE } from "src/entitys";
import { KnexRepository } from "./knex.repository";
import { PermissionRepositoryI } from "./repository";

@Injectable()
export class PermissionRepository 
    extends KnexRepository 
    implements PermissionRepositoryI 
{
    public table:string

    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "users"
    }

    createAluno(user: UserE): Promise<void> {
        throw new Error("Method not implemented.")
    }

    createPersonal(user: UserE): Promise<void> {
        throw new Error("Method not implemented.");
    }

    createAdmin(user: UserE): Promise<void> {
        throw new Error("Method not implemented.");
    }
}