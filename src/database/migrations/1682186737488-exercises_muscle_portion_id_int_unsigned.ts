import { MigrationInterface, QueryRunner } from "typeorm"

export class ExercisesMusclePortionIdIntUnsigned1682186737488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercise_muscle_portion MODIFY COLUMN id INT NOT NULL;`)
    }

}
