import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Medidas } from "../medidas/Medidas.entity";
import { Permissions } from "./Permissions.entity";

@Entity("users", { schema: "gymapp2" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 55 })
  name: string | null;

  @Column("varchar", { name: "nickname", nullable: true, length: 30 })
  nickname: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "cellphone", nullable: true, length: 20 })
  cellphone: string | null;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "birthday", nullable: true })
  birthday: Date | null;

  @OneToMany(() => Medidas, (medidas) => medidas.user)
  medidas: Medidas[];

  @ManyToMany(() => Permissions, _ => _.users)
  @JoinTable({
    name: "users_permission",
    joinColumn: {
      name:"user_id", referencedColumnName:"id"
    },
    inverseJoinColumn: {
      name:"permission_id", referencedColumnName:"id"
    }
  })
  permissions: Permissions[]
}
