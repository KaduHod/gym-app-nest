import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as UserDto from '../../user.dto'

@Injectable()
export default class RegisterDobrasService {
    constructor(
        private PrismaService: PrismaService
    ){}

    async main(args: UserDto.CreateDobras) {
        const data = UserDto.CreateDobras.toPrismaCreateInput(args)
        return await this.PrismaService.dobrasCutaneas.create({ data })
    }
}