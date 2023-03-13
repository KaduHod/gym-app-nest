import { Injectable } from "@nestjs/common";
import { UserE } from "src/entitys";
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
        const [id] = await this.saveUser();
        this.user.id = id
        await this.setPermission();
    }

    getUser(): UserE {
        return this.user;
    }

    async saveUser(): Promise<any> {
        return this.UserRepository.createUser(this.user)
    }

    async setPermission(): Promise<any> {
        return this.PermissionRepository.createPersonal(this.user)
    }
}