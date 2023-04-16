import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articulationtomovements } from "./Articulationtomovements";

@Entity("movements", { schema: "gymapp2" })
export class Movements {
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
    () => Articulationtomovements,
    (articulationtomovements) => articulationtomovements.b2
  )
  articulationtomovements: Articulationtomovements[];
}
