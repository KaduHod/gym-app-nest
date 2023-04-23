import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Articulation } from "./Articulations.entity";
import { MusclePortion } from "./MusclePortion.entity";

@Index("_ArticulationToMusclePortion_AB_unique", ["a", "b"], { unique: true })
@Index("_ArticulationToMusclePortion_B_index", ["b"], {})
@Entity("_articulationtomuscleportion", { schema: "gymapp2" })
export class Articulationtomuscleportion {
  @PrimaryColumn({ type: 'int', generated: 'increment' }) // define a dummy primary column
  id: number;
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

  @JoinColumn([{ name: "B", referencedColumnName: "id" }])
  b2: MusclePortion;
}
