import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTbaleArticulationMovementPortion1686508313298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE articulation_movement_muscle (
                id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                muscle_portion_id INT UNSIGNED NOT NULL,
                articulation_id INT UNSIGNED NOT NULL,
                movement_id INT UNSIGNED NOT NULL, 
                role ENUM('agonist','synergist','antagonist'),

                PRIMARY KEY (id),

                CONSTRAINT articulation_foreign_key
                FOREIGN KEY (articulation_id) REFERENCES articulations(id),

                CONSTRAINT muscle_portion_foreign_key
                FOREIGN KEY (muscle_portion_id) REFERENCES muscle_portion(id),

                CONSTRAINT movement_foreign_key
                FOREIGN KEY (movement_id) REFERENCES movements(id),

                CONSTRAINT UNIQUE (muscle_portion_id, articulation_id, movement_id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE articulation_movement_muscle;`)
    }

}
