import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Articulation } from "src/modules/articulation/Articulations.entity";
import { Repository } from "typeorm";

@Controller("articulations")
export default class ArticulationController {
    constructor(
        @InjectRepository(Articulation) 
        private articulationRepository: Repository<Articulation>
    ){}

    @Get("")
    async getArticulations() {
        return this.articulationRepository.find({
            relations: {
                movements: true
            }
        });
    }
}