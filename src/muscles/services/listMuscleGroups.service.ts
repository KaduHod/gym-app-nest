import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { InjectRepository } from "@nestjs/typeorm";
import { MuscleGroup } from "src/entitys/MuscleGroup.entity";
import { Repository } from "typeorm";

@Injectable()
export default class ListMuscleGroupService {
    constructor(
        @InjectRepository(MuscleGroup) private groupRepository:Repository<MuscleGroup>
    ){}

    async main(query: QueryMuscleGroupDto) {
        const {portions, ...q} = query

        if(q.id && typeof q.id === 'string') {
            q.id = parseInt(q.id);
        }

        const builder = this.groupRepository.createQueryBuilder("group")

        if(q.name) {
            Array.isArray(q.name) 
            ? builder.where("group.name IN (:...names)", {names: q.name})
            : builder.where("group.name = :name", {name: q.name}); 
        }
        
        if(portions) {
            builder.leftJoinAndSelect("group.musclePortions", "musclePortions")
        }
       
        return builder.getMany()
    }
}