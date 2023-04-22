import { MigrationInterface, QueryRunner } from "typeorm"

export class PermissionIdToIntUnsegnedInUsersPermissionTable1682180431876 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE users_permission MODIFY COLUMN permission_id INT UNSIGNED;`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE users_permission MODIFY COLUMN permission_id INT;`)
    }

}
