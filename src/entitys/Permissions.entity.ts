import { Column, Entity, JoinTable, JoinTableOptions, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/Users.entity";

@Entity("permissions", { schema: "gymapp2" })
export class Permissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 45 })
  title: string;

  @Column("datetime", {
    name: "createdAt",
    nullable: true,
    default: "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(() => User, _ => _.permissions)
  @JoinTable({
    name: "users_permission",
    joinColumn: {
      name:"permission_id", referencedColumnName:"id"
    },
    inverseJoinColumn: {
      name:"user_id", referencedColumnName:"id"
    }
  })
  users: User[]
}
