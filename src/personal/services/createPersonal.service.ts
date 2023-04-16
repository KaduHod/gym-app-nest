import { Inject, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { Personal } from "src/domain/Personais";
import { PrismaService } from "src/prisma/prisma.service";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";
import { Repository } from "typeorm";

@Injectable()
export default class CreatePersonalService {
    private user: User
    private personal: any
    constructor(
        private CreateUserService: CreateUserService,
        private PrismaService: PrismaService,
        @Inject("PERSONAL_REPOSITORY")
        private personalRepository: Repository<Personal>
    ){}


    async main(personal:User): Promise<User> {
        this.user = await this.CreateUserService.main(personal)
        this.personal = await this.personalRepository.save({
            userId: this.user.id
        })
        await this.CreateUserService.setPermission(permission.PERSONAL)
        return this.user;
    }  
}