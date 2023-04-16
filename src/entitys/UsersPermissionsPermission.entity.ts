import { Column, Entity, Index } from "typeorm";

@Index("IDX_a8ae4c08841340a12bb7e2db62", ["usersId"], {})
@Index("IDX_bb779b42732e822b848f9f32ad", ["permissionId"], {})
@Entity("users_permissions_permission", { schema: "gymapp2" })
export class UsersPermissionsPermission {
  @Column("int", { primary: true, name: "usersId" })
  usersId: number;

  @Column("int", { primary: true, name: "permissionId" })
  permissionId: number;
}
