import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QueryMusclePortionDto } from "../muscle.validator";
import { MusclePortion } from "../MusclePortion.entity";

@Injectable()
export default class ListMusclePortionService {
    public query: QueryMusclePortionDto

    constructor(
        @InjectRepository(MusclePortion)
        private portionsRepository:Repository<MusclePortion>
    ){}

    async main(query: QueryMusclePortionDto){
        const {articulations, group, name, exercises,...portionArgs} = query 
        const builder = this.portionsRepository.createQueryBuilder("portion")

        Array.isArray(name) 
            ? builder.where("portion.name IN (:...name)", {name})
            : builder.where("portion.name = :name", {name})

        if(portionArgs.id) {            
            Array.isArray(portionArgs.id) 
                ? builder.where("id IN (:...ids)", {ids: portionArgs.id}) 
                : builder.where("id = :id", {id: portionArgs.id})
        }

        if(!!group) {
            builder.leftJoinAndSelect("portion.muscleGroup", "muscleGroup")
        }

        return builder.getMany()
    }
}