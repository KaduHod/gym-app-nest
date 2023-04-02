import { UserNotFound } from "src/errors/app.errors";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import * as UserDto from "../user.dto";

@Injectable()
export default class UpdateUserService {
    constructor(
        private PrismaService: PrismaService,
    ){}

    async main(args: UserDto.UpdateUser): Promise<User> {
       await this.exists(args.id);
       return this.updateUser(args)
    }

    /**
     * Verifica se o usuario existe
     */
    async exists(id: number): Promise<User> {
        const user = await this.PrismaService.user.findFirst({where:{id}})
        if(!user) {
            throw new UserNotFound()
        }
        return user
    }

    /**
     * Atualiza o usuario
     */
    async updateUser(updateArgs: UserDto.UpdateUser): Promise<any> {
        const data = UserDto.UpdateUser.toPrismaUpdateInput(updateArgs)
        return this.PrismaService.user.update({ where:{id: updateArgs.id}, data })
    }
}