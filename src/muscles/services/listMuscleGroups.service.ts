import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { PrismaService } from "src/prisma/prisma.service";
import { MuscleGroup } from "@prisma/client";

@Injectable()
export default class ListMuscleGroupService {
    private groups: MuscleGroup[] 
    constructor(
        private PrismaService: PrismaService,
    ){}

    async main(query: QueryMuscleGroupDto): Promise<MuscleGroup[]> {
        const {portions, ...q} = query

        if(q.id && typeof q.id === 'string') {
            q.id = parseInt(q.id);
        }
        
        this.groups = await this.PrismaService.muscleGroup.findMany({
            where: q,
            include: {
                MusclePortion: !!portions
            }
        })

        return this.groups
    }
}