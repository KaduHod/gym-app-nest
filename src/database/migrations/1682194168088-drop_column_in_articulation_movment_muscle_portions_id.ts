import { MigrationInterface, QueryRunner } from "typeorm"

export class DropColumnMusclePortionIdInArticulationMovement1682194168088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE articulation_movement DROP COLUMN muscle_portions_id;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
