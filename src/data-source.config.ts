import { DataSource, DataSourceOptions } from 'typeorm'
import { Aluno } from './entitys/Alunos.entity';
import { Circunferencias } from './entitys/Circunferencias.entity';
import { Dobrascutaneas } from './entitys/Dobrascutaneas.entity';
import { Medidas } from './entitys/Medidas.entity';
import { Personal } from './entitys/Personais.entity';
import { User } from './entitys/Users.entity';
import * as env from 'dotenv'
env.config()

export const config: DataSourceOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    database: process.env.GYM_DATABASE_NAME,
    migrationsRun: true,
    synchronize: false,
    migrations: ['dist/database/migrations/*.js'],
    entities: ['dist/**/*.entity.js'],
} 

console.log(config)

const dataSource = new DataSource(config);

export default dataSource;