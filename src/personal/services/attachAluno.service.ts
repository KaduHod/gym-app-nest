import { Injectable } from "@nestjs/common";
import { AlunoAlreadyBelongsToPersonal, AlunoNotFound, PersonalNotFound } from "src/errors/app.errors";
import { PrismaService } from "src/prisma/prisma.service";
import {InjectRepository} from '@nestjs/typeorm'
import * as UserDto from "src/user/user.dto";
import { Personal } from "src/entitys/Personais.entity";
import { Repository } from "typeorm";
import { Aluno } from "src/entitys/Alunos.entity";

@Injectable()
export default class AttachAlunoService {
    private aluno:any
    private personal:any
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

        console.log(this.personal, this.aluno)
        
        await this.alunoHasPersonal()
        await this.attach()
    }

    async setAluno(id:number):Promise<void> {
        this.aluno = await this.alunoRepository.findOne({where:{id}})
    }

    async setPersonal(id:number) {
        this.personal = await this.personalRepository.findOne({where:{id}})
    }

    async alunoHasPersonal() {
        
    }

    async attach() {
        
    }
}