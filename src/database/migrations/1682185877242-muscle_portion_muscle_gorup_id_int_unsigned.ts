import { MigrationInterface, QueryRunner } from "typeorm"

export class MusclePortionMuscleGorupIdIntUnsigned1682185877242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion MODIFY COLUMN muscleGroup_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion MODIFY COLUMN muscleGroup_id INT NOT NULL;`)
    }

}
