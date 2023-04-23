import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Medidas } from "src/entitys/Medidas.entity";
import { Repository } from "typeorm";
import * as UserDto from '../../user.dto'

@Injectable()
export default class UpdateBasicAnthropometryService {
    constructor(
        @InjectRepository(Medidas) private medidasRepository: Repository<Medidas>
    ){}

    async main(args: UserDto.UpdateBasicAnthropometry) {
        const {
            weight, height, data, id
        } = args
        const {affected} = await this.medidasRepository.update(
            id, 
            {
                weight, 
                height, 
                data : data ?? new Date()
            }
        )

        if(!affected) throw new NotFoundException(`${id} does not exist!`)

        return this.medidasRepository.findOneBy({id})
    }
} 