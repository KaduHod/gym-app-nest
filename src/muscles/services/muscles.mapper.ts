import { Articulation, ArticulationMusclePortion, MuscleGroup, MusclePortion, Prisma } from "@prisma/client";

export type MusclePortionPrismaRelated = MusclePortion & {
    Articulations?: Array<ArticulationMusclePortion & {
        Articulation: Articulation
    }>,
    Group?: Array<MuscleGroup>,
    _count?: Prisma.MusclePortionCountOutputType
}

export type MusclePortionRelated = MusclePortion & {
    Articulations?: Articulation[],
    Group?: MuscleGroup[]
}
export class PortionMapper {
    static mapArticulations<T extends MusclePortion & {[key:string]:any}>(portions: T[]){
        return portions.map( (item) => {
            const {Articulations,...portion} = item
            const arts = Articulations.map( ({Articulation}) => Articulation)
            return {
                ...portion, Articulations: arts
            }
        })
    }
}