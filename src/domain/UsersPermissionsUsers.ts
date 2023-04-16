import { Column, Entity, Index } from "typeorm";

@Index("IDX_c57a58ec7947538cbb27935bf3", ["usersId_1"], {})
@Index("IDX_9accb7e70aa3ed0a15e5132116", ["usersId_2"], {})
@Entity("users_permissions_users", { schema: "gymapp2" })
export class UsersPermissionsUsers {
  @Column("int", { primary: true, name: "usersId_1" })
  usersId_1: number;

  @Column("int", { primary: true, name: "usersId_2" })
  usersId_2: number;
}
