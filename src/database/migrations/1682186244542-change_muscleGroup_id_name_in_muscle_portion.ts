import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeMuscleGroupIdNameInMusclePortion1682186244542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion CHANGE COLUMN muscleGroup_id muscle_group_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion CHANGE COLUMN muscle_group_id muscleGroup_id INT UNSIGNED NOT NULL;`)
    }

}
