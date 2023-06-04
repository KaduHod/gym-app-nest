import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Medidas } from "./Medidas.entity";

@Entity("circunferencias", { schema: "gymapp2" })
export class Circunferencias extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("double", { name: "braco", nullable: true, precision: 22 })
  braco: number | null;

  @Column("double", { name: "panturrilha", nullable: true, precision: 22 })
  panturrilha: number | null;

  @Column("double", { name: "coxa", nullable: true, precision: 22 })
  coxa: number | null;

  @Column("double", { name: "abdomen", nullable: true, precision: 22 })
  abdomen: number | null;

  @Column("double", { name: "torax", nullable: true, precision: 22 })
  torax: number | null;

  @Column("int", { name: "medida_id", unique: true, unsigned: true })
  medidaId: number;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => Medidas, (medidas) => medidas.circunferencias, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "medida_id", referencedColumnName: "id" }])
  medida: Medidas;
}
