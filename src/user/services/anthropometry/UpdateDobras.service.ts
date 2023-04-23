import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dobrascutaneas } from "src/entitys/Dobrascutaneas.entity";
import { Repository } from "typeorm";
import * as UserDto from '../../user.dto'

@Injectable()
export default class UpdateDobrasService {
    constructor(
        @InjectRepository(Dobrascutaneas) private dobrasRepository: Repository<Dobrascutaneas>
    ){}

    async main(args: UserDto.UpdateDobras) {
        const {
            cintura, triceps, peito, axilar, subscapular, supraIliaca, abdominal, coxa, quadril, id
        } = args

        const {affected} = await this.dobrasRepository.update(
            id,
            {cintura, triceps, peito, axilar, subscapular, supraIliaca, abdominal, coxa, quadril}
        )

        if(!affected) throw new NotFoundException(`Skinfold ${id} does not exist!`)

        return this.dobrasRepository.findOneBy({id})
    }
}