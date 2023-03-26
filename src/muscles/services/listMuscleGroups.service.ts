import { Injectable } from "@nestjs/common";
import { QueryMuscleGroupDto } from "../muscle.validator";
import { PrismaService } from "src/prisma/prisma.service";
import { MuscleGroup, Prisma } from "@prisma/client";

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

        const select:Prisma.MuscleGroupSelect = {
            id: true,
            name: true,
            image: true,
        } 

        if(!!portions) {
            select.musclePortion = {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            }
        }
        
        this.groups = await this.PrismaService.muscleGroup.findMany({
            where: q,
            select    
        }) as MuscleGroup[]

        return this.groups
    }
}