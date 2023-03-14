import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PermissionRepository } from "src/knex/permission.repository";
import PersonalRepository from "src/knex/personal.repository";
import UserRepository from "src/knex/user.repository";

@Injectable()
export class CreatePersonalService {
    private user: UserE
    constructor(
        private UserRepository: UserRepository,
        private PermissionRepository: PermissionRepository,
    ){}

    setUser(user:UserE): void {
        this.user = user
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