import { MigrationInterface, QueryRunner } from "typeorm"

export class MedidaIdToMedidaIdInDobrasCutaneasTable1682180107787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dobrascutaneas CHANGE medidaId medida_id int UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dobrascutaneas CHANGE medida_id medidaId int UNSIGNED;`)
    }

}
