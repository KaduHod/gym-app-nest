import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Circunferencias } from "src/modules/medidas/Circunferencias.entity";
import { Repository } from "typeorm";
import { CreateCircunferencias } from '../../user.dto'

@Injectable()
export default class RegisterCircunferencias {
    constructor(
        @InjectRepository(Circunferencias) private circunferenciasRepository: Repository<Circunferencias>
    ){}

    async main(args: CreateCircunferencias){
        const {
            medidaId, braco, coxa, abdomen, torax, panturrilha
        } = args
        return this.circunferenciasRepository.save({
            medidaId, braco, coxa, abdomen, torax, panturrilha
        })
    }
}