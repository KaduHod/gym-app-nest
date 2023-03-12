import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import knex from "knex";


@Injectable()
export class KnexRepository {
    public client:any
    constructor(
        public configService: ConfigService
    ){
        this.client = knex({
            client: this.configService.get<string>('DATABASE_CLIENT'),
            connection: {
                host: this.configService.get<string>('DATABASE_HOST'),
                port : this.configService.get<number>('DATABASE_PORT'),
                user : this.configService.get<string>('DATABASE_USER'),
                password : this.configService.get<string>('DATABASE_PWD'),
                database : this.configService.get<string>('GYM_DATABASE_NAME')
            }
        })
    }
}