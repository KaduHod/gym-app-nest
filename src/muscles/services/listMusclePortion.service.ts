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
        const {articulations, group, name, exercises,...portionArgs} = query    
        
        const where = portionArgs as Prisma.MusclePortionWhereInput
        
        const select:Prisma.MusclePortionSelect = { id: true, name: true, image: true } 

        if(Array.isArray(name)) {
            where.name = {in: name}
        }

        if(portionArgs.id) {            
            where.id = Array.isArray(portionArgs.id) 
                ? {in: portionArgs.id.map(Number)} 
                : {in:[Number(portionArgs.id)]}
        }

        if( !!articulations ) {
            select.Articulations = {
                select: {
                    Articulation: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }

        if(!!exercises) {
            select.Exercises = {
                select: {
                    Exercicio: {
                        select : {
                            id: true,
                            name: true,
                            force: true,
                            link: true,
                            execution: true,
                            mechanic: true
                        }
                    }
                }
            }
        }

        if(!!group) {
            select.Group = {
                select: {
                    id: true,
                    name: true,
                    image: true
                }
            }
        }

        return await this.PrismaService.musclePortion.findMany({
            where, select
        });;
    }
}