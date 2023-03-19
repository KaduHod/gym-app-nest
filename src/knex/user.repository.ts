import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { UserE } from "src/domain/entitys";
import User from "src/domain/User.entity";
import KnexRepository from "./knex.repository";
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
    findAll(): Promise<UserE[]> {
        throw new Error("Method not implemented.");
    }

    async create(userArgs: User): Promise<User> {
        const [id] = await this
                            .knex(this.table)
                            .insert(userArgs)
                            .on('query-error', this.handleError);
        userArgs.id = id;
        return userArgs;   
    }

    async first(userArgs: Partial<UserE>): Promise<UserE | null> {
        return this
                .knex(this.table)
                .where(userArgs)
                .first()
                .on('query-error', this.handleError);
    }

    async exists({nickname, email}): Promise<UserE | null> {
        return this
                .knex(this.table)
                .where("email", email)
                .orWhere("nickname", nickname)
                .first()
                .on('query-error', this.handleError);
    }

    async findBy(args:Partial<UserE>): Promise<any> {
        return this 
                .knex(this.table)
                .where(args)
                .on('query-error', this.handleError);
    }

    async update(args:UserE): Promise<any> {
        const {id, ...rest} = args
        return this 
                .knex(this.table)
                .where("id", id)
                .update(rest)
                .on('query-error', this.handleError);
    }
}
