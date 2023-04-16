import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Articulation } from "./Articulations";
import { MusclePortion } from "./MusclePortion";

@Index("_ArticulationToMusclePortion_AB_unique", ["a", "b"], { unique: true })
@Index("_ArticulationToMusclePortion_B_index", ["b"], {})
@Entity("_articulationtomuscleportion", { schema: "gymapp2" })
export class Articulationtomuscleportion {
  @Column("int", { name: "A", unsigned: true })
  a: number;

  @Column("int", { name: "B" })
  b: number;

  @ManyToOne(
    () => Articulation,
    (articulations) => articulations.articulationtomuscleportions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "A", referencedColumnName: "id" }])
  a2: Articulation;

  @ManyToOne(
    () => MusclePortion,
    (musclePortion) => musclePortion.articulationtomuscleportions,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "B", referencedColumnName: "id" }])
  b2: MusclePortion;
}
