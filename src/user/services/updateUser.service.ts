import { UserE } from "src/domain/entitys";
import UserRepository from "src/knex/user.repository";
import { UpdateUserDto } from "../user.validator";
import { validate } from 'class-validator'
import { InvalidUserError, UserNotFound } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UpdateUserService {
    private user:UserE
    constructor(
        private UserRepository: UserRepository
    ){}

    async main(): Promise<UserE> {
        const [_,userDb] = await Promise.all([this.validate(), this.exists()])
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
     * Valida os parametros que serão so novos valores do usuario no banco
     */
    async validate() {
        if(!this.user){
            throw new Error("User not setted.")
        }

        const user = new UpdateUserDto()
        user.id = this.user.id
        user.name = this.user.name
        user.nickname = this.user.nickname
        user.email = this.user.email
        user.password = this.user.password
        user.cellphone = this.user.cellphone

        const errors = await validate(user)

        if (errors.length) {
            throw new InvalidUserError(
                errorMapper(errors)
            )
        }
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