import { MigrationInterface, QueryRunner } from "typeorm"

export class RelatePersonalToAlunos1682185241769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos ADD CONSTRAINT alunos_personais_foreign_key FOREIGN KEY (personal_id) REFERENCES personais(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE alunos DROP FOREIGN KEY alunos_personais_foreign_key;`)
    }

}
