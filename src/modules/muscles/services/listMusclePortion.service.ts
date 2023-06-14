import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QueryMusclePortionDto } from "../muscle.validator";
import { MusclePortion } from "../MusclePortion.entity";

@Injectable()
export default class ListMusclePortionService {
    public query: QueryMusclePortionDto

    constructor(
        @InjectRepository(MusclePortion) private readonly portionsRepository:Repository<MusclePortion>
    ){}

    async main(query: QueryMusclePortionDto){
        const {articulations, group, name, group_id,exercises,...portionArgs} = query 
        const builder = this.portionsRepository.createQueryBuilder("portion")

        Array.isArray(name) 
            ? builder.where("portion.name IN (:...name)", {name})
            : builder.where("portion.name = :name", {name})

        if(portionArgs.id) {            
            Array.isArray(portionArgs.id) 
                ? builder.where("id IN (:...ids)", {ids: portionArgs.id}) 
                : builder.where("id = :id", {id: portionArgs.id})
        }

        if(group_id) {
            Array.isArray(group_id)
                ? builder.where("muscle_group_id IN (:...group_id)", {group_id: group_id.map(Number)}) 
                : builder.where("muscle_group_id = :group_id", {group_id : Number(group_id)}) 
        }

        if(group) {
            builder.leftJoinAndSelect("portion.muscleGroup", "muscleGroup")
        }

        return builder.getMany()
    }
}