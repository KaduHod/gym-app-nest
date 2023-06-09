import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateMusclePortionArticulationTable1686277239455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE muscle_portion_articulation (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            muscle_portion_id INT UNSIGNED NOT NULL,
            articulation_id INT UNSIGNED NOT NULL,

            PRIMARY KEY (id),

            CONSTRAINT muscle_portion_to_muscle_portion_articulation
            FOREIGN KEY (muscle_portion_id) REFERENCES muscle_portion(id),

            CONSTRAINT articulation_to_muscle_portion_articulation FOREIGN KEY (articulation_id) REFERENCES articulations(id)
        )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE muscle_portion_articulation 
        `);
    }

}
