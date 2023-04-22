import { MigrationInterface, QueryRunner } from "typeorm"

export class AddConstraintFromUsersPermissionUserIdToUsersId1682138940032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE users_permission
        ADD CONSTRAINT users_id_to_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT;
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users_permission
            DROP CONSTRAINT users_id_to_user_id;
        `);
    }

}
