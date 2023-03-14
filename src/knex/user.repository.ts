import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Knex } from "knex";
import { UserE } from "src/domain/entitys";
import { KnexRepository } from "./knex.repository";
import { UserRepositoryI } from "./repository";

@Injectable()
export default 
    class UserRepository 
    extends KnexRepository
    implements UserRepositoryI
{
    public table:string
    constructor( @Inject('KnexConnection') private knex:Knex  ){
        super()
        this.table = "users"
    }

    async createUser(userArgs: UserE): Promise<UserE> {
        const [id] = await this
                            .knex(this.table)
                            .insert(userArgs)
                            .on('query-error', this.handleError)
        userArgs.id = id;
        return userArgs;   
    }

    async first(userArgs: Partial<UserE>): Promise<UserE | null> {
        return this
                .knex(this.table)
                .where(userArgs)
                .first()
    }

    async exists({nickname, email}): Promise<UserE | null> {
        return this
                .knex(this.table)
                .where("email", email)
                .orWhere("nickname", nickname)
                .first();
    }

    async update(args:UserE): Promise<any> {
        const {id, ...rest} = args
        return this 
                .knex(this.table)
                .where("id", id)
                .update(rest)
                .on('query-error', this.handleError)
    }
}
