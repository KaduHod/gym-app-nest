import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as UserDto from '../../user.dto'

@Injectable()
export default class UpdateBasicAnthropometryService {
    constructor(
        private PrismaService: PrismaService
    ){}

    async main(args: UserDto.UpdateBasicAnthropometry) {
        const data = UserDto.UpdateBasicAnthropometry.toPrismaUpdateInput(args)
        return await this.PrismaService.medidas.update({
            data,
            where: {
                id: args.id
            },
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