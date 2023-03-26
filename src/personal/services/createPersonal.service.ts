import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class CreatePersonalService {
    private user: User
    private personal: any
    constructor(
        private CreateUserService: CreateUserService,
        private PrismaService: PrismaService
    ){}


    async main(personal:User): Promise<User> {
        this.user = await this.CreateUserService.main(personal)
        this.personal = await this.PrismaService.personal.create({
            data: {
                user: {
                    connect: {
                        id: this.user.id
                    }
                }
            }
        })
        await this.CreateUserService.setPermission(permission.PERSONAL)
        return this.personal;
    }  
}