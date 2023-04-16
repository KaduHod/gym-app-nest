import { Injectable } from "@nestjs/common";
import { AlunoAlreadyBelongsToPersonal, AlunoNotFound, PersonalNotFound } from "src/errors/app.errors";
import { PrismaService } from "src/prisma/prisma.service";
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export default class AttachAlunoService {
    private aluno:any
    private personal:any
    constructor(
        private PrismaService: PrismaService
    ){}

    async main(alunoId:number, personalId:number) {
        await Promise.all([
            this.setAluno(alunoId),
            this.setPersonal(personalId)
        ])

        await this.alunoHasPersonal()
        await this.attach()
    }

    async setAluno(id:number):Promise<void> {
        this.aluno = await this.PrismaService.aluno.findFirst({
            where: { id },
            select: { 
                id:true,
                personal: {
                    select: {
                        id:true,
                        user:{
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })
        
        if(!this.aluno) {
            throw new AlunoNotFound()
        }
    }

    async setPersonal(id:number) {
        this.personal = await this.PrismaService.personal.findFirst({
            where: { id },
            select: { id:true }
        })
        
        if(!this.personal) {
            throw new PersonalNotFound()
        }
    }

    async alunoHasPersonal() {
        if(!this.personal){
            throw new Error("Must set personal before search for aluno personal")
        }
        
        if (this.aluno.personal) {
            throw new AlunoAlreadyBelongsToPersonal(this.aluno.personal)
        }
    }

    async attach() {
        await this.PrismaService.aluno.update({
            where: {
                id: this.aluno.id
            },
            data: {
                personal: {
                    connect: {
                        id: this.personal.id
                    }
                }
            }
        })
    }
}