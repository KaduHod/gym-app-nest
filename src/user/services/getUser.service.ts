import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entitys/Users.entity";
import { Repository } from "typeorm";
import * as UserDto from '../user.dto'

@Injectable()
export default class GetUserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    async main({id}: UserDto.GetUser) {
        const [user] = await this.userRepository.find({
            take:1,
            where: {id: Number(id)},
            relations: {
                permissions: true,
                medidas: {
                    dobrascutaneas: true,
                    circunferencias: true
                },
            }
        }) 
        return user
    }
}