import { MigrationInterface, QueryRunner } from "typeorm"

export class MuscleGroupIdIntUnsigned1682185846680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_group MODIFY COLUMN id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_group MODIFY COLUMN id INT NOT NULL;`)
    }

}
