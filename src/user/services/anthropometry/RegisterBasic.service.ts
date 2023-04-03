import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as UserDto from '../../user.dto'

@Injectable()
export default class RegisterBasicAnthropometryService {
    constructor(
        private PrismaService: PrismaService
    ){}

    async main(args: UserDto.CreateBasicBasicAnthropometry) {
        const data = UserDto.CreateBasicBasicAnthropometry.toPrismaCreateInput(args)
        return await this.PrismaService.medidas.create({
            data,
            select: {
                user:{
                    select:{
                        name: true
                    }
                },
                weight: true,
                height: true,
                data: true
            }
        })
    }
} 