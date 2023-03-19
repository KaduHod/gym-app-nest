import { Injectable } from "@nestjs/common";
import { AlunoRepositoryI } from "src/knex/repository";
import { Mapped } from "./Entity";
import { Table } from "./entity.decorator";
import { AlunoE, PersonalE } from "./entitys";
import User from "./User.entity";

@Table('users')
@Injectable()
export default class Aluno extends User implements AlunoE, Mapped {
    public personal:PersonalE
    private alunoRepository: AlunoRepositoryI

    constructor(args:AlunoE){
        super(args)
    }

    setAlunoRepository(alunoRepository: AlunoRepositoryI) {
        this.alunoRepository = alunoRepository
    }

    async getPersonal() {
        this.personal = await this.alunoRepository.findPersonalOff(this)
        return this.personal
    }

    mapToHttp() {
        const {
            alunoRepository,
            ...rest 
        } = this

        return rest
    }
}