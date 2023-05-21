import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Medidas } from "./Medidas.entity";

@Entity("dobrascutaneas", { schema: "gymapp2" })
export class Dobrascutaneas extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("double", { name: "triceps", nullable: true, precision: 22 })
  triceps: number | null;

  @Column("double", { name: "subscapular", nullable: true, precision: 22 })
  subscapular: number | null;

  @Column("double", { name: "peito", nullable: true, precision: 22 })
  peito: number | null;

  @Column("double", { name: "axilar", nullable: true, precision: 22 })
  axilar: number | null;

  @Column("double", { name: "abdominal", nullable: true, precision: 22 })
  abdominal: number | null;

  @Column("double", { name: "supraIliaca", nullable: true, precision: 22 })
  supraIliaca: number | null;

  @Column("double", { name: "coxa", nullable: true, precision: 22 })
  coxa: number | null;

  @Column("double", { name: "cintura", nullable: true, precision: 22 })
  cintura: number | null;

  @Column("double", { name: "quadril", nullable: true, precision: 22 })
  quadril: number | null;

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

  @OneToOne(() => Medidas, (medidas) => medidas.dobrascutaneas, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "medida_id", referencedColumnName: "id" }])
  medida: Medidas;
}
