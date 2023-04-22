import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateArticulationMovementTable1682190160206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        CREATE TABLE articulation_movement (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            muscle_portions_id INT UNSIGNED NOT NULL,
            articulation_id INT UNSIGNED NOT NULL,
            movement_id INT UNSIGNED NOT NULL,

            PRIMARY KEY (id),

            CONSTRAINT articulation_articulation_movement_foreign_key 
            FOREIGN KEY (articulation_id) REFERENCES articulations(id),

            CONSTRAINT movement_articulation_movement_foreign_key 
            FOREIGN KEY (movement_id) REFERENCES movements(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE articulation_movement
        DROP FOREING KEY articulation_articulation_movement_foreign_key,
        DROP FOREING KEY movement_articulation_movement_foreign_key;
        DROP TABLE articulation_movement;
        `)
    }

}
