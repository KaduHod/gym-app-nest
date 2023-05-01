import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movements } from "src/entitys/Movements.entity";
import { Repository } from "typeorm";

@Controller("movements")
export default class MovementsController {
    constructor(
        @InjectRepository(Movements)
        private movementsRepository:Repository<Movements>
    ){}

    @Get("")
    async getMovements() {
        return this.movementsRepository.find({
            relations: {
                articulations: true
            }
        })
    }
}