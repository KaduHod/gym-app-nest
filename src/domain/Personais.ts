import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("personais", { schema: "gymapp2" })
export class Personal {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;
}
