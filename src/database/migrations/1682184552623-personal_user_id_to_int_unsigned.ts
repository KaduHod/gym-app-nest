import { MigrationInterface, QueryRunner } from "typeorm"

export class PersonalUserIdToIntUnsigned1682184552623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE personais CHANGE user_id user_id int UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dobrascutaneas CHANGE user_id user_id int;`)
    }

}
