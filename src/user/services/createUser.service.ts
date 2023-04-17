import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/entitys/Users.entity";
import { Permissions } from "src/entitys/Permissions.entity";
import { UsersPermission } from "src/entitys/UsersPermission.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { Repository } from "typeorm";
import { permission } from "src/utils/enums";
import * as UserDto from '../user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class CreateUserService {
    private user: User
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(UsersPermission)
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