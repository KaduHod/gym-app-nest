import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { UserRepositoryI } from "src/knex/repository";
import { CreateUserDto } from "../user.validator";
import ValidateUserDtoService from "./validateUserDto.service";

@Injectable()
export default class CreateUserService {
    private userArgs: UserE
    constructor(
        private UserRepository: UserRepositoryI,
        private CreateUserDto: CreateUserDto,
        private ValidateUserDtoService: ValidateUserDtoService
    ) {}

    async main(userArgs:UserE) {
        await this.setUser(userArgs)
        await this.saveUser()
        return this.getUser()
    }

    async setUser(args: UserE): Promise<this> {
        this.userArgs = (await this
                            .ValidateUserDtoService
                            .setArgs(args)
                            .setDto(this.CreateUserDto)
                            .validate()
                        ).getValidatedArgs() as UserE;
        return this
    }

    async saveUser(): Promise<this> {
        if (!this.userArgs) {
            throw new Error("userArgs not defined in CreateUserService.")
        }
        this.userArgs = await this.UserRepository.create(this.userArgs)
        return this
    }

    getUser(): UserE {
        return this.userArgs;
    }
}