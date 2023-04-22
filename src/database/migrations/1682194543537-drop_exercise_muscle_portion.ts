import { MigrationInterface, QueryRunner } from "typeorm"

export class DropExerciseMusclePortion1682194543537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE exercise_muscle_portion;   
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
