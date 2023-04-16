import { DataSource, DataSourceOptions } from 'typeorm'

export const config: DataSourceOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "gymapp2",
    migrationsRun: true,
    synchronize: false,
    migrations: ['dist/database/migrations/*.js'],
    entities: ['dist/**/*.entity.js'],
} 

const dataSource = new DataSource(config);

export default dataSource;