import { MigrationInterface, QueryRunner } from "typeorm"

export class UserIdUnsignedUsersPermission1682138516744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Change the column type from INT to INT UNSIGNED
        await queryRunner.query(`ALTER TABLE users_permission MODIFY COLUMN user_id INT UNSIGNED
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Change the column type back to INT
        await queryRunner.query(`ALTER TABLE users_permission MODIFY COLUMN user_id INT
        `)
    }
}
