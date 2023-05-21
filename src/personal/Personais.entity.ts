import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Aluno } from "../aluno/Alunos.entity";

@Entity("personais", { schema: "gymapp2" })
export class Personal {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @OneToMany(() => Aluno, (aluno) => aluno.personal)
  alunos:Aluno[]
}
