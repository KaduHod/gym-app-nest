import { DataSource, DataSourceOptions } from 'typeorm'
import { Aluno } from './entitys/Alunos.entity';
import { Circunferencias } from './entitys/Circunferencias.entity';
import { Dobrascutaneas } from './entitys/Dobrascutaneas.entity';
import { Medidas } from './entitys/Medidas.entity';
import { Personal } from './entitys/Personais.entity';
import { User } from './entitys/Users.entity';

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