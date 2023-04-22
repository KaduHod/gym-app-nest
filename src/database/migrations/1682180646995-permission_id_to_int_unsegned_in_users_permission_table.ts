import { MigrationInterface, QueryRunner } from "typeorm"

export class PermissionIdToIntUnsegnedInUsersPermissionTable1682180646995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE users_permission ADD CONSTRAINT users_permission_permission_foreign_key FOREIGN KEY (permission_id) REFERENCES permissions(id);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE users_permission DROP FOREIGN KEY users_permission_permission_foreign_key;`)
    }

}
