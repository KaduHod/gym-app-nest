import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Medidas } from "src/entitys/Medidas.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { Repository } from "typeorm";
import * as UserDto from '../../user.dto'

@Injectable()
export default class RegisterBasicAnthropometryService {
    constructor(
        @InjectRepository(Medidas) private medidaRepository: Repository<Medidas>
    ){}

    async main(args: UserDto.CreateBasicAnthropometry) {
        const {userId, weight, height, data} = args
        return await this.medidaRepository.save({userId, weight, height, data})
    }
} 