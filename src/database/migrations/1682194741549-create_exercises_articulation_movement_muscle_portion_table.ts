import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateExercisesArticulationMovementMusclePortionTable1682194741549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE exercises_articlation_movement_muscle_portion (
            id INT UNSIGNED NOT NULL AUTO_INCREMENT,
            articulation_movement_muscle_portion_id INT UNSIGNED NOT NULL,
            exercise_id INT UNSIGNED NOT NULL,

            PRIMARY KEY (id),

            CONSTRAINT articulation_movement_muscle_portion_to_mam_foreign_key
            FOREIGN KEY (articulation_movement_muscle_portion_id) REFERENCES articulation_movement_muscle_portion(id),

            CONSTRAINT exercise_id_to_mam_foreign_key FOREIGN KEY (exercise_id) REFERENCES exercicios(id)
        )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE exercises_articlation_movement_muscle_portion
            DROP FOREING KEY articulation_movement_muscle_portion_to_mam_foreign_key,
            DROP FOREING KEY exercise_id_to_mam_foreign_key;
            DROP TABLE exercises_articlation_movement_muscle_portion;
        `)
    }

}
