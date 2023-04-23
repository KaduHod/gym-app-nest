import { Injectable } from "@nestjs/common";
import { Personal } from "src/entitys/Personais.entity";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";
import { Repository } from "typeorm";
import {InjectRepository} from '@nestjs/typeorm'
import { User } from "src/entitys/Users.entity";

@Injectable()
export default class CreatePersonalService {
    private user: User
    private personal: any
    constructor(
        private CreateUserService: CreateUserService,
        @InjectRepository(Personal)
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