import { MigrationInterface, QueryRunner } from "typeorm"

export class ExercisesMusclePortionMusclePortionIdIntUnsigned1682186747796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN muscle_portion_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN muscle_portion_id INT NOT NULL;`)
    }
}
