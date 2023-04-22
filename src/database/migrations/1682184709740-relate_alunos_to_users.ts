import { MigrationInterface, QueryRunner } from "typeorm"

export class RelateAlunosToUsers1682184709740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos ADD CONSTRAINT alunos_users_foreign_key FOREIGN KEY (user_id) REFERENCES users(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos DROP FOREIGN KEY alunos_users_foreign_key;`)
    }

}
