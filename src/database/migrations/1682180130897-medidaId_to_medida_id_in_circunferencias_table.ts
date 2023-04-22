import { MigrationInterface, QueryRunner } from "typeorm"

export class MedidaIdToMedidaIdInCircunferenciasTable1682180130897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE circunferencias CHANGE medidaId medida_id int UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE circunferencias CHANGE medida_id medidaId int;`)
    }

}
