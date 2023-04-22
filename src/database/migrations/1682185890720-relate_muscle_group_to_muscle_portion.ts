import { MigrationInterface, QueryRunner } from "typeorm"

export class RelateMuscleGroupToMusclePortion1682185890720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE muscle_portion ADD CONSTRAINT musclesGroup_to_musclePortion_foreign_key FOREIGN KEY (muscleGroup_id) REFERENCES muscle_group(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE muscle_portion DROP FOREIGN KEY musclesGroup_to_musclePortion_foreign_key;`)
    }

}
