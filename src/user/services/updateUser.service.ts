import { UserE } from "src/domain/entitys";
import { UpdateUserDto } from "../user.validator";
import { UserNotFound } from "src/errors/app.errors";
import { Injectable } from "@nestjs/common";
import { UserRepositoryI } from "src/knex/repository";
import ValidateUserDtoService from './validateUserDto.service'

@Injectable()
export default class UpdateUserService {
    private user:UserE
    constructor(
        private UserRepository: UserRepositoryI,
        private ValidateUserDtoService: ValidateUserDtoService,
        private UpdateUserDto: UpdateUserDto
    ){}

    async main(): Promise<UserE> {
        const [_,userDb] = await Promise.all([
            this.ValidateUserDtoService
                .setDto<UpdateUserDto>(this.UpdateUserDto)
                .setArgs(this.user)
                .validate(), 
            this.exists()
        ])
        await this.updateUser(this.user)
        return {...userDb,...this.user} as UserE;
    }

    /**
     * Seta novos valores
     */
    setUser(user: UserE): void {
        this.user = user
    }

    /**
     * Verifica se o usuario existe
     */
    async exists(): Promise<UserE> {
        const user = await this.UserRepository.first({id:this.user.id} as UserE)
        if(!user) {
            throw new UserNotFound()
        }
        return user
    }

    /**
     * Atualiza o usuario
     */
    async updateUser(user: UserE): Promise<any> {
        return this.UserRepository.update(user)
    }
}