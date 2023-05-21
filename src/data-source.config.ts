import { DataSource, DataSourceOptions } from 'typeorm'
import { Aluno } from './aluno/Alunos.entity';
import { Articulation } from './articulation/Articulations.entity';
import { getEnv } from './config/env';
import { ExerciseMusclePortion } from './entitys/ExerciseMusclePortion.entity';
import { Treinos } from './entitys/Treinos.entity';
import { Exercicio } from './exercicios/Exercicios.entity';
import { Circunferencias } from './medidas/Circunferencias.entity';
import { Dobrascutaneas } from './medidas/Dobrascutaneas.entity';
import { Medidas } from './medidas/Medidas.entity';
import { Movements } from './movements/Movements.entity';
import { MuscleGroup } from './muscles/MuscleGroup.entity';
import { MusclePortion } from './muscles/MusclePortion.entity';
import { Personal } from './personal/Personais.entity';
import { Permissions } from './user/Permissions.entity';
import { User } from './user/Users.entity';
const env = getEnv()

export const config: DataSourceOptions = {
    type: "mysql",
    host: env["DATABASE_HOST"],
    port: Number(env["DATABASE_PORT"]),
    username: env["DATABASE_USER"],
    password: env["DATABASE_PWD"],
    database: env["GYM_DATABASE_NAME"],
    migrationsRun: false,
    synchronize: false,
    migrations: [
        __dirname + '\\database\\migrations\\**\\*.js'
    ],
    entities: [
        User,
        Personal,
        Aluno,
        MuscleGroup,
        MusclePortion,
        Treinos,
        Exercicio,
        ExerciseMusclePortion,
        Articulation,
        Movements,
        Medidas,
        Circunferencias,
        Dobrascutaneas,
        Permissions
    ],
} 

const dataSource = new DataSource(config);

export const dataSourceFactory = () => {
    return new DataSource(config)
}

export default dataSource;