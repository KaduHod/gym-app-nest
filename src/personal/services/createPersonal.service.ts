import { Injectable } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PermissionRepositoryI } from "src/knex/repository";
import CreateUserService from "src/user/services/createUser.service";
@Injectable()
export default class CreatePersonalService {
    private userArgs: UserE
    constructor(
        private CreateUserService: CreateUserService,
        private PermissionRepository: PermissionRepositoryI,
    ){}

    async createUser(): Promise<void> {
        this.userArgs = await this.CreateUserService.main(this.userArgs)
    }

    setUserArgs(userArgs:UserE): this {
        this.userArgs = userArgs
        return this
    }

    async main(userArgs:UserE): Promise<this> {
        this.setUserArgs(userArgs)
        await this.createUser();
        await this.setUserPermission();
        return this
    }

    getUser(): UserE {
        return this.userArgs;
    }

    /* Register user permission of personal in database */
    async setUserPermission(): Promise<any> {
        return this.PermissionRepository.createPersonal(this.userArgs)    
    }
}