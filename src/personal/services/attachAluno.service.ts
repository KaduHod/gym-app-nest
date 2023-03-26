import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { AlunoAlreadyBelongsToPersonal, AlunoNotFound, PersonalNotFound } from "src/errors/app.errors";
import { PrismaService } from "src/prisma/prisma.service";
import { permission } from "src/utils/enums";

@Injectable()
export default class AttachAlunoService {
    private aluno:User
    private personal:User
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
        this.aluno = await this.PrismaService.user.findFirst({
            where: {
                id,
                users_permissions: {
                    every: {
                        permission_id: permission.ALUNO
                    }
                }
            }
        })
        
        if(!this.aluno) {
            throw new AlunoNotFound()
        }
    }

    async setPersonal(id:number) {
        this.personal = await this.PrismaService.user.findFirst({
            where: {
                id,
                users_permissions: {
                    every: {
                        permission_id: permission.PERSONAL
                    }
                }
            }
        })
        
        if(!this.personal) {
            throw new PersonalNotFound()
        }
    }

    async alunoHasPersonal() {
        if(!this.personal){
            throw new Error("Must set personal before search for aluno personal")
        }

        const personalIdFinded = await this.PrismaService.aluno.findFirst({
            where: {
                personalId:this.personal.id
            }
        })
        
        if (personalIdFinded) {
            throw new AlunoAlreadyBelongsToPersonal(personalIdFinded)
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