import { Injectable } from "@nestjs/common";
import { User } from "src/user/Users.entity";
import * as UserDto from "../user.dto";
import { Repository } from "typeorm";
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export default class UpdateUserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async main(args: UserDto.UpdateUser): Promise<User> {
       await this.updateUser(args)
       return this.getUser(args.id)
    }

    /**
     * Atualiza o usuario
     */
    async updateUser({id, ...partialArgs}: UserDto.UpdateUser): Promise<any> {
        return this.userRepository.update(id, partialArgs)
    }

    async getUser(id:number) {
        return this.userRepository.findOne({where: {id}})
    }
}