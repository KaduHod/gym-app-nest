import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exercicio } from "./Exercicios.entity";
import { MusclePortion } from "./MusclePortion.entity";

@Index("exercise_muscle_portion_exercise_id_fkey", ["exerciseId"], {})
@Index(
  "exercise_muscle_portion_muscle_portion_id_fkey",
  ["musclePortionId"],
  {}
)
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
      "stabilizer",
      "antagonist",
      "antagonist stabilizer",
      "dynamic stabilizer",
    ],
  })
  role:
    | "agonist"
    | "synergist"
    | "stabilizer"
    | "antagonist"
    | "antagonist stabilizer"
    | "dynamic stabilizer"
    | null;

  @ManyToOne(
    () => Exercicio,
    (exercicios) => exercicios.exerciseMusclePortions,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "exercise_id", referencedColumnName: "id" }])
  exercise: Exercicio;

  @ManyToOne(
    () => MusclePortion,
    (musclePortion) => musclePortion.exerciseMusclePortions,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "muscle_portion_id", referencedColumnName: "id" }])
  musclePortion: MusclePortion;
}
