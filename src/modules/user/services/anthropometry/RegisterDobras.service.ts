import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dobrascutaneas } from "src/modules/medidas/Dobrascutaneas.entity";
import { Repository } from "typeorm";
import * as UserDto from '../../user.dto'

@Injectable()
export default class RegisterDobrasService {
    constructor(
        @InjectRepository(Dobrascutaneas) private dobrasRepository: Repository<Dobrascutaneas>
    ){}

    async main(args: UserDto.CreateDobras) {
        const {
            cintura, triceps, peito, axilar, 
            subscapular, supraIliaca, abdominal, 
            coxa, quadril, medidaId
        } = args
        return await this.dobrasRepository.save({
            cintura, triceps, peito, axilar, 
            subscapular, supraIliaca, abdominal, 
            coxa, quadril, medidaId
        })
    }
}