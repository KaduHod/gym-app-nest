import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Circunferencias } from "src/entitys/Circunferencias.entity";
import { UpdateCircunferencias } from "src/user/user.dto";
import { Repository } from "typeorm";

export default class UpdateCircunferenciasService {
    constructor(
        @InjectRepository(Circunferencias) private circunferecniasRepository: Repository<Circunferencias>
    ){}

    async main(args:UpdateCircunferencias) {
        const {
            id, braco, abdomen, torax, coxa, panturrilha
        } = args

        const {affected} = await this.circunferecniasRepository.update(
            id,
            {braco, abdomen, torax, coxa, panturrilha}
        )

        if(!affected) throw new NotFoundException(`Girth ${id} does not exist!`)
        
        return this.circunferecniasRepository.findOneBy({id})
    }
}