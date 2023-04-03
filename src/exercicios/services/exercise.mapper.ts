import { Exercicio, ExerciseToMusclePortion, MusclePortion } from "@prisma/client";

export default class ExerciseMapper {
    static mapPortions(
        exercise: Exercicio & {
            muscles: Array<ExerciseToMusclePortion & {musclePortion: MusclePortion}> 
        }
    ){
        const {muscles, ...rest} = exercise
        return {
            ...rest,
            muscles: muscles.map( muscle => {
                const {role, musclePortion} = muscle
                return {
                    ...musclePortion,
                    role
                }
            })
        }
    }
}