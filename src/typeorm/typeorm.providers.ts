import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import { join } from "path";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            dotenv.config()
            const source = new DataSource({
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: 3306,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PWD,
                database: process.env.GYM_DATABASE_NAME,
                entities: [
                    join(__dirname, '/../**/**.entity{.ts,.js}')
                ],
                migrations:[],
                synchronize: false,
            })
            return source.initialize()
        }
    },
]