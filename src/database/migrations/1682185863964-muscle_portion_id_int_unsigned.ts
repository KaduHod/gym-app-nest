import { MigrationInterface, QueryRunner } from "typeorm"

export class MusclePortionIdIntUnsigned1682185863964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion MODIFY COLUMN id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE muscle_portion MODIFY COLUMN id INT NOT NULL;`)
    }

}
