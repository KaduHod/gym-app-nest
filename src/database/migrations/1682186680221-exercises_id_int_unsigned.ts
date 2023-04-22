import { MigrationInterface, QueryRunner } from "typeorm"

export class ExercisesIdIntUnsigned1682186680221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercicios MODIFY COLUMN id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE exercicios MODIFY COLUMN id INT NOT NULL;`)
    }

}
