import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class CreateUserService {
    private user: User
    constructor(
        private PrismaService: PrismaService
    ) {}

    async main(userArgs:User) {
        await this.createuser(userArgs)
        return this.getUser()
    }

    async createuser(data: User): Promise<this> {
        this.user = await this.PrismaService.user.create({ data })
        return this
    }

    getUser(): User {
        return this.user;
    }

    async setPermission(permission: permission) {
        if(!this.user){
            throw new Error("Must create user before set permission!")
        }
        await this.PrismaService.users_permissions.create({
            data: {
                user_id: this.user.id,
                permission_id: permission
            }
        })
    }
}