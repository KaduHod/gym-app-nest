import { Injectable } from "@nestjs/common";
import Aluno from "src/domain/aluno.entity";
import { AlunoE, PersonalE } from "src/domain/entitys";
import Personal from "src/domain/Personal.entity";
import { AlunoAlreadyBelongsToPersonal, AlunoNotFound, PersonalNotFound } from "src/errors/app.errors";
import { AlunoRepositoryI, PersonalRepositoryI } from "src/knex/repository";

@Injectable()
export default class AttachAlunoService {
    private aluno:Aluno
    private personal:Personal
    constructor(
        private PersonalRepository: PersonalRepositoryI,
        private AlunoRepository: AlunoRepositoryI
    ){}

    async main(alunoId:number, personalId:number) {
        console.log(alunoId, personalId)
        await Promise.all([
            this.setAluno(alunoId),
            this.setPersonal(personalId)
        ])

        this.aluno.setAlunoRepository(this.AlunoRepository)
        this.personal.setPersonalRepository(this.PersonalRepository)

        await this.aluno.getPersonal()

        console.log(this.aluno)
        
        if(this.aluno.personal) {
            throw new AlunoAlreadyBelongsToPersonal(this.aluno.personal)
        }

        await this.personal.attachAluno(this.aluno)

        await this.aluno.getPersonal()

        return this.getAluno()
    }

    async setAluno(id:number):Promise<void> {
        const alunoDB = await this.AlunoRepository.first({id}) as AlunoE;
        console.log({alunoDB})
        if(!alunoDB) {
            throw new AlunoNotFound()
        }
        this.aluno = new Aluno(alunoDB)
    }

    async setPersonal(id:number) {
        const personalDB = await this.PersonalRepository.first({id}) as PersonalE;
        console.log({personalDB})
        if(!personalDB) {
            throw new PersonalNotFound()
        }
        this.personal = new Personal( personalDB )
    }

    getAluno(){
        return this.aluno
    }
}