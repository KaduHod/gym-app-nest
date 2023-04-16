import { DataSource } from "typeorm";
import * as dotenv from 'dotenv'
import { User } from "src/domain/Users";
import { Personal } from "src/domain/Personais";
import { Medidas } from "src/domain/Medidas";
import { Circunferencias } from "src/domain/Circunferencias";
import { Dobrascutaneas } from "src/domain/Dobrascutaneas";


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
                    User, Personal, Medidas, Circunferencias, Dobrascutaneas
                ],
                synchronize: true,
            })


            return source.initialize()
        }
    }
]