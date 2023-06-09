import { MigrationInterface, QueryRunner } from "typeorm"

export class AddAutoIncrements1682195614818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        // ALTER TABLE muscle_portion
        // MODIFY COLUMN id INT UNSIGNED NOT NULL AUTO_INCREMENT;
        // `)

        // await queryRunner.query(`
        // ALTER TABLE muscle_group
        // MODIFY COLUMN id INT UNSIGNED NOT NULL AUTO_INCREMENT;
        // `)

        // await queryRunner.query(`
        // ALTER TABLE exercicios
        // MODIFY COLUMN id INT UNSIGNED NOT NULL AUTO_INCREMENT;
        // `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`
        // ALTER TABLE muscle_portion
        // MODIFY COLUMN id INT UNSIGNED NOT NULL;
// 
        // ALTER TABLE muscle_group
        // MODIFY COLUMN id INT UNSIGNED NOT NULL;
// 
        // ALTER TABLE exercicios
        // MODIFY COLUMN id INT UNSIGNED NOT NULL;
        // `)
    }

}
