import { DataSource, DataSourceOptions } from 'typeorm'
import { Aluno } from './modules/aluno/Alunos.entity';
import { Articulation } from './modules/articulation/Articulations.entity';
import { getEnv } from './config/env';
import { ExerciseMusclePortion } from './entitys/ExerciseMusclePortion.entity';
import { Treinos } from './entitys/Treinos.entity';
import { Exercicio } from './modules/exercicios/Exercicios.entity';
import { Movements } from './modules/movements/Movements.entity';
import { Personal } from './modules/personal/Personais.entity';
import { Permissions } from './modules/user/Permissions.entity';
import { User } from './modules/user/Users.entity';
import { MusclePortion } from './modules/muscles/MusclePortion.entity';
import { MuscleGroup } from './modules/muscles/MuscleGroup.entity';
import { Medidas } from './modules/medidas/Medidas.entity';
import { Circunferencias } from './modules/medidas/Circunferencias.entity';
import { Dobrascutaneas } from './modules/medidas/Dobrascutaneas.entity';
import { ArticulationMovement } from './entitys/articulationMovement.entity';
import { ArticulationMovementPortion } from './entitys/ArticulationMovementMusclePortion.entity';
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
        Permissions,
        ArticulationMovement,
        ArticulationMovementPortion
    ],
} 

const dataSource = new DataSource(config);

export const dataSourceFactory = () => {
    return new DataSource(config)
}

export default dataSource;