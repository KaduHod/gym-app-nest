import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("treinos", { schema: "gymapp2" })
export class Treinos {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;
}
