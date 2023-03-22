import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { QueryMusclePortionDto } from "../muscle.validator";
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export default class ListMusclePortionService {
    public query: QueryMusclePortionDto

    constructor(
        private PrismaService: PrismaService
    ){}

    async main(query: QueryMusclePortionDto){
        const {articulations, group, name ,...portionArgs} = query        
        const where = portionArgs as Prisma.MusclePortionWhereInput
        const include = {} as Prisma.MusclePortionInclude

        if(Array.isArray(name)) {
            where.name = {in: name}
        }

        if ( articulations ) {
            include.Articulations = !!articulations
        }
        
        if ( group ) {
            include.Group = !!group
        }

        return await this.PrismaService.musclePortion.findMany({
            where: portionArgs, include
        })

    }
}