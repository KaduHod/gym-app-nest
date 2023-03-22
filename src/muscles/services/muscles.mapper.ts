import { MusclePortion } from "@prisma/client";

export class MusclePortionMapper {
    static PortionToResponse(portions: MusclePortion[]): any {
        return portions.map( (item) => {
            const {articulation_muscle, ...portion} = item
            return {
                portion, articulation_muscle
            }
        })
    }
}