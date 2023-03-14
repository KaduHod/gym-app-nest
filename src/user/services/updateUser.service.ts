import { UserE } from "src/domain/entitys";
import UserRepository from "src/knex/user.repository";
import { UpdateUserDto } from "../user.validator";
import { validate } from 'class-validator'
import { InvalidUserError } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateUserService {
    private user:UserE
    constructor(
        private UserRepository: UserRepository
    ){}

    async main(){
        await this.validate()
    }

    setUser(user: UserE): void {
        this.user = user
    }

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
}