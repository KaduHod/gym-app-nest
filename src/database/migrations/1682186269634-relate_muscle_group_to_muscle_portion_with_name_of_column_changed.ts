import { MigrationInterface, QueryRunner } from "typeorm"

export class RelateMuscleGroupToMusclePortionWithNameOfColumnChanged1682186269634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE muscle_portion ADD CONSTRAINT muscles_group_to_muscle_portion_foreign_key FOREIGN KEY (muscle_group_id) REFERENCES muscle_group(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE muscle_portion DROP FOREIGN KEY musclesGroup_to_musclePortion_foreign_key;`)
    }
}
