import { Inject, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { Permissions } from "src/domain/Permissions";
import { UsersPermission } from "src/domain/UsersPermission";
import { PrismaService } from "src/prisma/prisma.service";
import { Repository } from "typeorm";
import { permission } from "src/utils/enums";
import * as UserDto from '../user.dto'

@Injectable()
export default class CreateUserService {
    private user: User
    constructor(
        @Inject("USER_REPOSITORY")
        private userRepository: Repository<User>,
        @Inject("USERS_PERMISSION_REPOSIOTRY")
        private userPermissionRepository: Repository<UsersPermission>,
    ) {}

    async main(userArgs: UserDto.CreateUser) {
        await this.createuser(userArgs)
        return this.getUser()
    }

    async createuser(args: UserDto.CreateUser): Promise<this> {
        this.user = await this.userRepository.save(args)
        return this
    }

    getUser(): User {
        return this.user;
    }

    async setPermission(permission: permission) {
        if(!this.user){
            throw new Error("Must create user before set permission!")
        }
    
        await this.userPermissionRepository.save({
            permissionId: permission,
            userId: this.user.id
        })
    }
}