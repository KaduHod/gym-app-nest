import { MigrationInterface, QueryRunner } from "typeorm"

export class RelatePersonaisToUsers1682184703901 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE personais ADD CONSTRAINT personais_users_foreign_key FOREIGN KEY (user_id) REFERENCES users(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE personais DROP FOREIGN KEY personais_users_foreign_key;`)
    }

}
