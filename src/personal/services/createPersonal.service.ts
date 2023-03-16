import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import ValidateUserDtoService from "src/user/services/validateUserDto.service";
import { CreateUserDto } from "src/user/user.validator";

@Injectable()
export default class CreatePersonalService {
    private user: UserE
    constructor(
        private UserRepository: UserRepositoryI,
        private PermissionRepository: PermissionRepositoryI,
        private ValidateUserDtoService: ValidateUserDtoService,
        private CreateUserDto: CreateUserDto
    ){}

    async setUser(user:UserE): Promise<void> {
        this.user = (await this
                            .ValidateUserDtoService
                            .setDto(this.CreateUserDto)
                            .setArgs(user)
                            .validate()
                    ).getValidatedArgs()
    }

    async main(): Promise<any> {
        this.user = await this.saveUser();
        await this.setUserPermission();
    }

    getUser(): UserE {
        return this.user;
    }

    /* Register user in database */
    async saveUser(): Promise<UserE> {
        return this.UserRepository.create(this.user)
    }

    /* Register user permission of personal in database */
    async setUserPermission(): Promise<any> {
        return this.PermissionRepository.createPersonal(this.user)    
    }
}