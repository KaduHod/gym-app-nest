import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Knex } from "knex";
import { UserE } from "src/entitys";
import { KnexRepository } from "./knex.repository";

@Injectable()
export default 
    class UserRepository 
    extends KnexRepository
{
    public table:string
    constructor( @Inject('KnexConnection') private knex:Knex  ){
        super()
        this.table = "users"
    }

    async createUser(userArgs: UserE): Promise<any> {
        return this.knex(this.table).insert(userArgs);
    }
}