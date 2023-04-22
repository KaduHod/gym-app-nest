import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableTreinoExercises1682187335690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE treino_exercise (
            id INT UNSIGNED NOT NULL,
            treino_id INT UNSIGNED NOT NULL,
            exercise_id INT UNSIGNED NOT NULL,
            PRIMARY KEY(id),
            CONSTRAINT treino_to_treino_exercise_foreign_key FOREIGN KEY (treino_id) REFERENCES treinos (id),
            CONSTRAINT exercise_to_treino_exercise_foreign_key FOREIGN KEY (exercise_id) REFERENCES exercicios (id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE treino_exercise
        DROP FOREIGN KEY treino_to_treino_exercise_foreign_key,
        DROP FOREIGN KEY exercise_to_treino_exercise_foreign_key;
        DROP TABLE treino_exercises;
        `)
    }

}
