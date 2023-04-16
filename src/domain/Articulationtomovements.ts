import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Articulation } from "./Articulations";
import { Movements } from "./Movements";

@Index("_ArticulationToMovements_AB_unique", ["a", "b"], { unique: true })
@Index("_ArticulationToMovements_B_index", ["b"], {})
@Entity("_articulationtomovements", { schema: "gymapp2" })
export class Articulationtomovements {
  @Column("int", { name: "A", unsigned: true })
  a: number;

  @Column("int", { name: "B", unsigned: true })
  b: number;

  @ManyToOne(
    () => Articulation,
    (Articulation) => Articulation.articulationtomovements,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "A", referencedColumnName: "id" }])
  a2: Articulation;

  @ManyToOne(
    () => Movements,
    (movements) => movements.articulationtomovements,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "B", referencedColumnName: "id" }])
  b2: Movements;
}
