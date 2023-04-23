import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articulationtomuscleportion } from "./Articulationtomuscleportion.entity";

@Entity("articulations", { schema: "gymapp2" })
export class Articulation {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;


  @OneToMany(
    () => Articulationtomuscleportion,
    (articulationtomuscleportion) => articulationtomuscleportion.a2
  )
  articulationtomuscleportions: Articulationtomuscleportion[];
}