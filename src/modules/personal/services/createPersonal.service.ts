import { Injectable } from "@nestjs/common";
import { Personal } from "src/modules/personal/Personais.entity";
import CreateUserService from "src/modules/user/services/createUser.service";
import { permission } from "src/utils/enums";
import { Repository } from "typeorm";
import {InjectRepository} from '@nestjs/typeorm'
import { User } from "src/modules/user/Users.entity";
import { encrypt } from "src/utils/hash.helper";

@Injectable()
export default class CreatePersonalService {
    private user: User
    private personal: any
    constructor(
        private CreateUserService: CreateUserService,
        @InjectRepository(Personal)
        private personalRepository: Repository<Personal>,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}


    async main(personal:User): Promise<User | any>  {
        const userDB = await this.userRepository.find({
            take:1,
            relations: {
                permissions:true
            },
            where: {
                id: 81
            }
        })
        console.log(encrypt("12345678"))
        return userDB;
        this.user = await this.CreateUserService.main(personal)
        this.personal = await this.personalRepository.save({
            userId: this.user.id
        })
        await this.CreateUserService.setPermission(permission.PERSONAL)
        return this.user;
    }  
}