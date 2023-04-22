import { MigrationInterface, QueryRunner } from "typeorm"

export class RelateMusclePortionToExerciseMusclePortion1682186814195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE exercise_muscle_portion ADD CONSTRAINT exercise_muscle_portion_to_muscle_portion FOREIGN KEY (muscle_portion_id) REFERENCES muscle_portion(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE exercise_muscle_portion DROP FOREIGN KEY exercise_muscle_portion_to_muscle_portion;`)
    }


}
