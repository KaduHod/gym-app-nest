import { MigrationInterface, QueryRunner } from "typeorm"

export class add_personal_id_to_alunos_table1681692637333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE alunos ADD COLUMN personal_id int unsigned null;")
        await queryRunner.query("ALTER TABLE alunos ADD CONSTRAINT aluno_belongs_to_personal FOREIGN KEY (personal_id) REFERENCES personais (id);")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE alunos ADD COLUMN personal_id int unsigned null;")
        await queryRunner.query("ALTER TABLE alunos DROP CONSTRAINT aluno_belongs_to_personal;")
    }

}
