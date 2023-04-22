import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Personal } from "./Personais.entity";

@Entity("alunos", { schema: "gymapp2" })
export class Aluno {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", nullable: false })
  userId: number | null;

  @ManyToOne(() => Personal, (personal) => personal.alunos)
  @JoinColumn({ name: "personal_id" })
  personal?:Personal
}
