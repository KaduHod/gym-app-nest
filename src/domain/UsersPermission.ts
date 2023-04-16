import { Column, Entity, Index } from "typeorm";

@Index("IDX_c58e29c10f3cbafe54bba1a79d", ["usersId"], {})
@Entity("users_permission", { schema: "gymapp2" })
export class UsersPermission {
  @Column("int", { primary: true, name: "permission_id" })
  permissionId: number;

  @Column("int", { primary: true, name: "usersId" })
  usersId: number;
}
