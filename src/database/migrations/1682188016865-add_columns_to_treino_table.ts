import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnsToTreinoTable1682188016865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE treinos

        ADD COLUMN creator_id INT UNSIGNED NOT NULL,
        ADD CONSTRAINT user_to_treino_foreign_key FOREIGN KEY (creator_id) REFERENCES users(id),

        ADD COLUMN personal_id INT UNSIGNED NULL,
        ADD CONSTRAINT personal_to_treino_foreign_key FOREIGN KEY (personal_id) REFERENCES personais(id),

        ADD COLUMN assigned_to INT UNSIGNED NULL,
        ADD CONSTRAINT assigned_to_treino_foreign_key FOREIGN KEY (assigned_to) REFERENCES users(id),

        ADD CONSTRAINT only_personal_can_assing_to CHECK (personal_id IS NULL AND assigned_to IS NULL),

        ADD COLUMN aluno_id INT UNSIGNED NULL,
        ADD CONSTRAINT aluno_to_treino_key FOREIGN KEY (aluno_id) REFERENCES alunos(id);
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE treinos
        DROP CONSTRAINT user_to_treino_foreign_key,
        DROP CONSTRAINT personal_to_treino_foreign_key,
        DROP CONSTRAINT assigned_to_treino_foreign_key,
        DROP CONSTRAINT only_personal_can_assing_to,
        DROP CONSTRAINT aluno_to_treino_key;
        DROP TABLE treinos;
        `)
    }

}
