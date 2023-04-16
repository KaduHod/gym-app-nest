import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Articulationtomuscleportion } from "./Articulationtomuscleportion.entity";
import { ExerciseMusclePortion } from "./ExerciseMusclePortion.entity";
import { MuscleGroup } from "./MuscleGroup.entity";

@Index("muscle_portion_muscleGRoup", ["muscleGroupId"], {})
@Entity("muscle_portion", { schema: "gymapp2" })
export class MusclePortion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("int", { name: "muscleGroup_id" })
  muscleGroupId: number;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => Articulationtomuscleportion,
    (articulationtomuscleportion) => articulationtomuscleportion.b2
  )
  articulationtomuscleportions: Articulationtomuscleportion[];

  @OneToMany(
    () => ExerciseMusclePortion,
    (exerciseMusclePortion) => exerciseMusclePortion.musclePortion
  )
  exerciseMusclePortions: ExerciseMusclePortion[];

  @ManyToOne(() => MuscleGroup, (muscleGroup) => muscleGroup.musclePortions, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "muscleGroup_id", referencedColumnName: "id" }])
  muscleGroup: MuscleGroup;
}
