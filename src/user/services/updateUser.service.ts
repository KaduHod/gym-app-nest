import { UserNotFound } from "src/errors/app.errors";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export default class UpdateUserService {
    private user:User
    constructor(
        private PrismaService: PrismaService,
       
    ){}

    async main(): Promise<User> {
       await this.exists();
       const {id, ...updateArgs} = this.user
       return this.updateUser(updateArgs)
    }

    /**
     * Seta novos valores
     */
    setUser(user: User): void {
        this.user = user
    }

    /**
     * Verifica se o usuario existe
     */
    async exists(): Promise<User> {
        const user = await this.PrismaService.user.findFirst({where:{id:this.user.id}})
        if(!user) {
            throw new UserNotFound()
        }
        return user
    }

    /**
     * Atualiza o usuario
     */
    async updateUser(updateArgs: Omit<User, "id">): Promise<any> {
        return this.PrismaService.user.update({
            where:{id: this.user.id},
            data:updateArgs
        })
    }
}