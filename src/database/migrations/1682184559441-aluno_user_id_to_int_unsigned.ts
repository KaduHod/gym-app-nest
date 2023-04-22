import { MigrationInterface, QueryRunner } from "typeorm"

export class AlunoUserIdToIntUnsigned1682184559441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos CHANGE user_id user_id int UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos CHANGE user_id user_id int;`)
    }
}
