import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateArticulationMovementMusclePortionTable1682191582549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE articulation_movement_muscle_portion (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            muscle_portion_id INT UNSIGNED NOT NULL,
            articulation_movement_id INT UNSIGNED NOT NULL,
            role ENUM('agonist','synergist','antagonist') NOT NULL,
        
            PRIMARY KEY (id),
        
            CONSTRAINT muscle_portion_articulation_movement_muscle_portion FOREIGN KEY (muscle_portion_id) REFERENCES muscle_portion(id),
        
            CONSTRAINT articulation_movement_id_muscle_portion_articulation_movement FOREIGN KEY (articulation_movement_id) REFERENCES articulation_movement(id)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        ALTER TABLE articulation_movement_muscle_portion
        DROP FOREIGN KEY muscle_portion_articulation_movement_muscle_portion_forgein_key,
        DROP FOREIGN KEY articulation_movement_id_muscle_portion_articulation_movement_forgein_key;
        DROP TABLE articulation_movement_muscle_portion;
    `);
    }

}
