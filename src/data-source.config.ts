import { DataSource, DataSourceOptions } from 'typeorm'
import * as env from 'dotenv'
env.config()

export const config: DataSourceOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PWD,
    database: process.env.GYM_DATABASE_NAME,
    migrationsRun: false,
    synchronize: false,
    migrations: [__dirname + '\\database\\migrations\\**\\*.js'],
    entities: ['dist/**/*.entity.js'],
} 

console.log(config)

const dataSource = new DataSource(config);

export default dataSource;