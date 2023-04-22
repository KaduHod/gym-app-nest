import { MigrationInterface, QueryRunner } from "typeorm"

export class RelateExerciseToExerciseMusclePortion1682186785426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE exercise_muscle_portion ADD CONSTRAINT exercise_muscle_portion_to_exercise FOREIGN KEY (exercise_id) REFERENCES exercicios(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE exercise_muscle_portion DROP FOREIGN KEY exercise_muscle_portion_to_exercise;`)
    }

}
