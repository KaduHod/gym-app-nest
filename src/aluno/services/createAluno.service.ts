import { Injectable } from "@nestjs/common";
import { Aluno } from "src/entitys/Alunos.entity";
import CreateUserService from "src/user/services/createUser.service";
import { permission } from "src/utils/enums";
import { Repository } from "typeorm";
import {InjectRepository} from '@nestjs/typeorm'
import { User } from "src/entitys/Users.entity";

@Injectable()
export default class CreateAlunoServiceV2 {
    private user: User
    private aluno: any
    constructor(
        private CreateUserService: CreateUserService,
        @InjectRepository(Aluno)
        private alunoRepository: Repository<Aluno>
    ){}

    async main(aluno:User): Promise<User> {
        this.user = await this.CreateUserService.main(aluno)
        this.aluno = await this.alunoRepository.save({ userId: this.user.id, personalId:null })
        await this.CreateUserService.setPermission(permission.ALUNO)
        return this.user;
    }    
}