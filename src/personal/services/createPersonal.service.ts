import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PermissionRepositoryI, UserRepositoryI } from "src/knex/repository";
import ValidateCreateUserArgs from "src/user/services/validateCreateUserArgs.service";

@Injectable()
export default class CreatePersonalService {
    private user: UserE
    constructor(
        private UserRepository: UserRepositoryI,
        private PermissionRepository: PermissionRepositoryI,
        private ValidateUserService: ValidateCreateUserArgs
    ){}

    async setUser(user:UserE): Promise<void> {
        this.user = (await this
                            .ValidateUserService
                            .setUserArgs(user)
                            .validate()
                    ).getValidatedUser()
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