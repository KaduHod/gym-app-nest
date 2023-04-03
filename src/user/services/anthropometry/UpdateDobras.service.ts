import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as UserDto from '../../user.dto'

@Injectable()
export default class UpdateDobrasService {
    constructor(
        private PrismaService: PrismaService
    ){}

    async main(args: UserDto.UpdateDobras) {
        const data = UserDto.UpdateDobras.toPrismaUpdateInput(args)

        return await this.PrismaService.dobrasCutaneas.update({
            data, where:{id: args.id},
            select: {
                id:true,
                triceps:true,
                subscapular:true,
                peito:true,
                axilar:true,
                abdominal:true,
                supraIliaca:true,
                coxa:true,
                cintura:true,
                quadril:true,
                medidaId:true
            }
        })
    }
}