import { Injectable } from "@nestjs/common";
import { UserE } from "src/entitys";
import { PermissionRepository } from "src/knex/permission.repository";
import PersonalRepository from "src/knex/personal.repository";

@Injectable()
export class CreatePersonalService {
    private userArgs: UserE
    constructor(
        private PersonalRepository: PersonalRepository,
        private PermissionRepository: PermissionRepository,
    ){}

    setUser(user:UserE): void {
        this.userArgs = user
    }
}