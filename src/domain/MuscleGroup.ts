import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MusclePortion } from "./MusclePortion";

@Entity("muscle_group", { schema: "gymapp2" })
export class MuscleGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("datetime", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => MusclePortion, (musclePortion) => musclePortion.muscleGroup)
  musclePortions: MusclePortion[];
}
