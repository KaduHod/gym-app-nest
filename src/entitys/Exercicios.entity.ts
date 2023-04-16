import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExerciseMusclePortion } from "./ExerciseMusclePortion.entity";

@Entity("exercicios", { schema: "gymapp2" })
export class Exercicio {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "force", nullable: true, length: 255 })
  force: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("text", { name: "execution", nullable: true })
  execution: string | null;

  @Column("text", { name: "mechanic", nullable: true })
  mechanic: string | null;

  @OneToMany(
    () => ExerciseMusclePortion,
    (exerciseMusclePortion) => exerciseMusclePortion.exercise
  )
  exerciseMusclePortions: ExerciseMusclePortion[];
}
