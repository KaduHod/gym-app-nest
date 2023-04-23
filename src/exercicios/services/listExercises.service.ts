import { Injectable } from "@nestjs/common";
import { QueryExerciseDto } from "../exercise.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Exercicio } from "src/entitys/Exercicios.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ListExerciseService {
    constructor(
        @InjectRepository(Exercicio) private exerciseRepository: Repository<Exercicio>
    ){}

    async main(query: QueryExerciseDto) {
        if(!Object.keys(query).length) {
            return this.exerciseRepository.find();
        }
        const {muscles, role,...queryArgs} = query  
        const builder = this.exerciseRepository.createQueryBuilder("exercise")
        QueryExerciseDto.toWhereArgs(builder, queryArgs, "exercise")        
        return builder.getMany()
    }
}

