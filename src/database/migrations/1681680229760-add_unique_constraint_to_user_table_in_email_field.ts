import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUniqueConstraintToUserTableInEmailField1681680229760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users ADD CONSTRAINT user_unique_email UNIQUE (email);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users DROP INDEX user_unique_email;
        `)
    }

}
