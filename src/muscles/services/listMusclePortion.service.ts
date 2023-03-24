import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { QueryMusclePortionDto } from "../muscle.validator";
import { PortionMapper } from './muscles.mapper'

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

        if ( !!articulations ) {
            include.Articulations = {
                include: {
                    Articulation: true
                }
            }
        }
        
        if ( group ) {
            include.Group = !!group
        }

        const portions = await this.PrismaService.musclePortion.findMany({
            where: portionArgs, include
        });

        return !!articulations ? PortionMapper.mapArticulations(portions) : portions;
    }
}