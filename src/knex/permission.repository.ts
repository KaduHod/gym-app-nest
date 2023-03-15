import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { UserE } from "src/domain/entitys";
import KnexRepository from "./knex.repository";
import { PermissionRepositoryI } from "./repository";
import enums from '../utils/enums'

@Injectable()
export default class PermissionRepository 
    extends KnexRepository 
    implements PermissionRepositoryI 
{
    public table:string
    constructor(@Inject('KnexConnection') private knex:Knex){
        super()
        this.table = "users_permissions"
    }

    createAluno(user: UserE): Promise<any> {
        return this
                .knex(this.table)
                .insert({
                    user_id: user.id,
                    permission_id: enums.permission.ALUNO
                })
    }

    createPersonal(user: UserE): Promise<any> {
        return this
                .knex(this.table)
                .insert({
                    user_id: user.id,
                    permission_id: enums.permission.PERSONAL
                })
    }

    createAdmin(user: UserE): Promise<any> {
        return this
                .knex(this.table)
                .insert({
                    user_id: user.id,
                    permission_id: enums.permission.ADMIN
                })
    }
}