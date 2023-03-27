import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { QueryExerciseDto } from "../exercise.dto";
import { Prisma } from '@prisma/client';

@Injectable()
export default class ListExerciseService {
    constructor(
        private PrismaService: PrismaService
    ){}

    async main<T extends QueryExerciseDto>(query: T) {
        if(!Object.keys(query).length) {
            return this.PrismaService.exercicio.findMany()
        }

        const {muscles, ...queryArgs} = query  

        const prismaQueryArgs = this.buildPrismaQueryArgs(queryArgs)

        prismaQueryArgs.select = {
            id: true,
            name: true,
            force: true,
            link: true,
            execution: true,
            mechanic: true,
        } as Prisma.ExercicioSelect

        if( !!muscles ) {            
            prismaQueryArgs.select.muscles = {
                select: {
                    role: true,
                    musclePortion: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    }
                }
            }
            
        }       

        return this.PrismaService.exercicio.findMany(prismaQueryArgs)
    }

    private buildPrismaQueryArgs<T extends Omit<QueryExerciseDto, "muscles">>(query: T): Prisma.ExercicioFindManyArgs {
        const prismaQueryArgs: Prisma.ExercicioFindManyArgs = { where: {} };
        if(query.hasOwnProperty("id") && query.id) {
            query.id = Array.isArray(query.id) ? query.id.map(Number) : Number(query.id);
        }

        for (const key in query) {
            if(key === "role") continue;

            prismaQueryArgs.where[
                key as keyof Prisma.ExercicioWhereInput
            ] = Array.isArray(query[key])
                ? {in:query[key]} as Prisma.ExercicioWhereInput
                : {in:[query[key]]} as Prisma.ExercicioWhereInput;
        }

        return prismaQueryArgs;
    }
}

