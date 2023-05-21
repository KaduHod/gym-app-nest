import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movements } from "../movements/Movements.entity";

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

  @ManyToMany(() => Movements, _ => _.articulations)
  @JoinTable({
    name: "articulation_movement",
    joinColumn: {
      name: "articulation_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "movement_id",
      referencedColumnName: "id",
    }
  })
  movements: Movements[]
}
