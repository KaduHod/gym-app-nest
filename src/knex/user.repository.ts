import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { KnexRepository } from "./knex.repository";

@Injectable()
export default 
    class UserRepository 
    extends KnexRepository
{
    public users: any
    constructor(public configService: ConfigService){
        super(configService);
        this.users = this.client('users')
    }

    listAll(): Promise<any>
    {
        return this.users;
    }
}