import { MigrationInterface, QueryRunner } from "typeorm"

export class ExercisesMusclePortionExerciseIdIntUnsigned1682186761375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN exercise_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN exercise_id INT NOT NULL;`)
    }
}
