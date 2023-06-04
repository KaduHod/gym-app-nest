import { MusclePortion } from "src/modules/muscles/MusclePortion.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exercicio } from "../modules/exercicios/Exercicios.entity";


@Entity("exercise_muscle_portion", { schema: "gymapp2" })
export class ExerciseMusclePortion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "muscle_portion_id" })
  musclePortionId: number;

  @Column("int", { name: "exercise_id" })
  exerciseId: number;

  @Column("enum", {
    name: "role",
    nullable: true,
    enum: [
      "agonist",
      "synergist",
      "antagonist",
    ],
  })
  role:
    | "agonist"
    | "stabilizer"
    | "antagonist"
    | null;

  @ManyToOne(
    () => Exercicio,
    (exercicios) => exercicios.exerciseMusclePortions,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "exercise_id", referencedColumnName: "id" }])
  exercise: Exercicio;

  @JoinColumn([{ name: "muscle_portion_id", referencedColumnName: "id" }])
  musclePortion: MusclePortion;
}
