import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class CreatePersonalService {
    private personal: User
    constructor(
        private CreateUserService: CreateUserService,
    ){}


    async main(personal:User): Promise<User> {
        this.personal = await this.CreateUserService.main(personal)
        await this.CreateUserService.setPermission(permission.PERSONAL)
        return this.personal;
    }  
}