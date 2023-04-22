import { MigrationInterface, QueryRunner } from "typeorm"

export class UserIdToUserIdInMedidasTable1682179861501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE medidas CHANGE userId user_id int UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE medidas CHANGE  user_id userId int UNSIGNED;`)
    }

}
