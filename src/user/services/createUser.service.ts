import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/entitys/Users.entity";
import { Permissions } from "src/entitys/Permissions.entity";
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
        @InjectRepository(Permissions)
        private permissionRepository: Repository<Permissions>,
    ) {}

    async main(userArgs: UserDto.CreateUser) {
        await this.validate(userArgs)
        await this.createuser(userArgs)
        return this.getUser()
    }

    async createuser(args: UserDto.CreateUser): Promise<this> {
        this.user = await this.userRepository.save(args)
        return this
    }

    async validate(userArgs: UserDto.CreateUser) {
        await Promise.all([
            this.checkEmail(userArgs.email),
            this.checkNickname(userArgs.nickname),
        ])
    }

    async checkEmail(email:string) {
        const exists = await this.userRepository.findOneBy({email})
        if(!exists) return 
        throw { error: `${email} not available!` }
    }

    async checkNickname(nickname:string) {
        const exists = await this.userRepository.findOneBy({nickname})
        if(!exists) return 
        throw { error: `${nickname} not available!` }
    }

    getUser(): User {
        return this.user;
    }

    async setPermission(permission: permission) {
        if(!this.user){
            throw new Error("Must create user before set permission!")
        }
        const targetPremission = await this.permissionRepository.findOne({
            where: {id: permission}
        })

        if(!permission) {
            throw new NotFoundException(`Permission ${permission} does not exist!`)
        };
        
        this.user.permissions = [targetPremission]
        await this.userRepository.save(this.user)
    }
}