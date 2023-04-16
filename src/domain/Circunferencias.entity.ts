import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Medidas } from "./Medidas.entity";

@Index("Circunferencias_medidaId_key", ["medidaId"], { unique: true })
@Entity("circunferencias", { schema: "gymapp2" })
export class Circunferencias {
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

  @Column("int", { name: "medidaId", unique: true, unsigned: true })
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
  @JoinColumn([{ name: "medidaId", referencedColumnName: "id" }])
  medida: Medidas;
}
