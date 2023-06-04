import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Circunferencias } from "./Circunferencias.entity";
import { Dobrascutaneas } from "./Dobrascutaneas.entity";
import { User } from "../user/Users.entity";

@Entity("medidas", { schema: "gymapp2" })
export class Medidas extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("double", { name: "weight", precision: 22 })
  weight: number;

  @Column("double", { name: "height", precision: 22 })
  height: number;

  @Column("datetime", { name: "data" })
  data: Date;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => Circunferencias, (circunferencias) => circunferencias.medida)
  circunferencias: Circunferencias;

  @OneToOne(() => Dobrascutaneas, (dobrascutaneas) => dobrascutaneas.medida)
  dobrascutaneas: Dobrascutaneas;

  @ManyToOne(() => User, (User) => User.medidas, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
