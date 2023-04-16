import { MigrationInterface, QueryRunner } from "typeorm"

export class AddNotNullContraintToAlunoTable1681607216365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE Alunos MODIFY userId Int NOT NULL;`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
