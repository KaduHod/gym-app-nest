import { AlunoAlreadyBelongsToPersonal } from "src/errors/app.errors";
import { PersonalRepositoryI } from "src/knex/repository";
import Aluno from "./aluno.entity";
import { Mapped } from "./Entity";
import { Table } from "./entity.decorator";
import { AlunoE, PersonalE } from "./entitys";
import User from "./User.entity";

@Table("users")
export default 
class Personal extends User implements PersonalE, Mapped 
{
    public alunos:AlunoE[]
    private personalRepository: PersonalRepositoryI
    
    constructor(args:PersonalE){
        super(args)
    }

    setPersonalRepository(personalRepository: PersonalRepositoryI) {
        this.personalRepository = personalRepository
    }

    async attachAluno(aluno:Aluno) {
        const alunos = await this.personalRepository.findAlunos(this)
        const alreadyHasAluno = alunos.find(({id}) => id === aluno.id)
        if(alreadyHasAluno) {
            throw new AlunoAlreadyBelongsToPersonal(this)
        }
        await this.personalRepository.attachAluno(this, aluno)
        return this
    }


    async getAlunos() {
        this.alunos = await this.personalRepository.findAlunos(this)
        return this.alunos
    }

    mapToHttp() {
        const {
           personalRepository ,...rest
        } = this

        return rest
    }

}