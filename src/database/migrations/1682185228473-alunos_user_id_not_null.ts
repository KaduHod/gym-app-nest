import { MigrationInterface, QueryRunner } from "typeorm"

export class AlunosUserIdNotNull1682185228473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE alunos MODIFY COLUMN user_id INT UNSIGNED NOT NULL;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE alunos MODIFY COLUMN user_id INT UNSIGNED;`)
    }

}
