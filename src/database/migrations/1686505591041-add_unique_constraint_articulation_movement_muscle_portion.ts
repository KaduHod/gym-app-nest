import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUniqueConstraintArticulationMovementMusclePortion1686505591041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE articulation_movement_muscle_portion
            ADD CONSTRAINT unique_relation UNIQUE (muscle_portion_id, articulation_movement_id, role);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE articulation_movement_muscle_portion
            DROP INDEX unique_relation;
        `)
    }

}