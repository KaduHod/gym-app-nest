import { Injectable } from "@nestjs/common";
import {InjectRepository} from '@nestjs/typeorm'
import * as UserDto from "src/user/user.dto";
import { Personal } from "src/personal/Personais.entity";
import { Repository } from "typeorm";
import { Aluno } from "src/aluno/Alunos.entity";

@Injectable()
export default class AttachAlunoService {
    private aluno:Aluno
    private personal:Personal
    constructor(
        @InjectRepository(Personal)
        private personalRepository: Repository<Personal>,
        @InjectRepository(Aluno)
        private alunoRepository: Repository<Aluno>
    ){}

    async main({aluno_id, personal_id}: UserDto.AttachAluno) {
        await Promise.all([
            this.setAluno(aluno_id),
            this.setPersonal(personal_id)
        ])
        await this.attach()
    }

    async setAluno(id:number):Promise<void> {
        this.aluno = await this.alunoRepository.findOne({where:{id}})
    }

    async setPersonal(id:number) {
        this.personal = await this.personalRepository.findOne({where:{id}})
    }

    async attach() {
        this.aluno.personal = this.personal 
        await this.aluno.save()
    }
}