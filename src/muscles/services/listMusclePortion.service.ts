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

        console.log(query);
        
        const where = portionArgs as Prisma.MusclePortionWhereInput

        if(Array.isArray(name)) {
            where.name = {in: name}
        }

        const portions = await this.PrismaService.musclePortion.findMany({
            where: portionArgs
        })

        const promises = [];
        if(!!articulations) {
            portions.forEach( portion => {
                portion
            })
        }

        const portions = await this.PrismaService.musclePortion.findMany({
            where: portionArgs
        })


        // i have this code in typescript and prisma.
// 
// 
        // is possible to i get recordos that relate to each portion like that, "portions[0].getUser()"?
        // ok, i know that. but i would like to get the relation after the first query. 

        if(!!group) {

        }

        return 
    }
}