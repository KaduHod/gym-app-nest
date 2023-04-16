import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("alunos", { schema: "gymapp2" })
export class Aluno {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", nullable: false })
  userId: number | null;
}
