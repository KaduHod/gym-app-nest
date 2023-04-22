import { MigrationInterface, QueryRunner } from "typeorm"

export class PersonaisUserIdNotNull1682185518923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE personais MODIFY COLUMN user_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE personais MODIFY COLUMN user_id INT UNSIGNED;`)
    }

}
