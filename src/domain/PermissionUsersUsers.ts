import { Column, Entity, Index } from "typeorm";

@Index("IDX_07a36b98dd038db7473acff777", ["permissionId"], {})
@Index("IDX_18b51dd0e5301d161cb56b8d6c", ["usersId"], {})
@Entity("permission_users_users", { schema: "gymapp2" })
export class PermissionUsersUsers {
  @Column("int", { primary: true, name: "permissionId" })
  permissionId: number;

  @Column("int", { primary: true, name: "usersId" })
  usersId: number;
}
