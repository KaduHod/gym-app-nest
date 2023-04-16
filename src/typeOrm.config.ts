import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const config:TypeOrmModuleOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "gymapp2",
    migrationsRun: true,
    synchronize: false,
    migrations: ['/dist/migrations/*.js'],
    entities: ['dist/**/*.entity.js'],
} 