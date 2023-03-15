import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import PermissionRepository from "src/knex/permission.repository";
import UserRepository from "src/knex/user.repository";
import ValidateUser from "src/user/services/validateUser.service";

@Injectable()
export default class CreatePersonalService {
    private user: UserE
    constructor(
        private UserRepository: UserRepository,
        private PermissionRepository: PermissionRepository,
    ){}

    async setUser(user:UserE): Promise<void> {
        this.user = (await ValidateUser(user)) as UserE
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
        return this.UserRepository.createUser(this.user)
    }

    /* Register user permission of personal in database */
    async setUserPermission(): Promise<any> {
        return this.PermissionRepository.createPersonal(this.user)    
    }
}