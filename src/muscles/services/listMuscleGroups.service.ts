import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { PrismaService } from "src/prisma/prisma.service";
import { MuscleGroup } from "@prisma/client";

@Injectable()
export default class ListMuscleGroupService {
    private query:QueryMuscleGroupDto
    private groups: MuscleGroup[] 
    constructor(
        private PrismaService: PrismaService,
    ){}

    async main(query: QueryMuscleGroupDto): Promise<MuscleGroup | MuscleGroup[]> {
        const {portions, ...q} = query
        
        this.groups = await this.PrismaService.muscleGroup.findMany({
            where: q,
            include: {
                MusclePortion: !!portions
            }
        })

        return this.groups
    }
}