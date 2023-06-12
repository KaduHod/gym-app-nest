import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Articulation } from "../articulation/Articulations.entity";


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

  @ManyToMany(() => Articulation, _ => _.movements)
  @JoinTable({
    name: "articulation_movement",
    joinColumn: {
      name: "movement_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "articulation_id",
      referencedColumnName: "id"
    }
  })
  articulations: Articulation[]

  @OneToMany(() => ArticulationMovementPortion, amp => amp.movement)
  articulationPortions: ArticulationMovementPortion[]
}
