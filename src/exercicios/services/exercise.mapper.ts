import { Exercicio } from "src/entitys/Exercicios.entity"
import { MusclePortion } from "src/entitys/MusclePortion.entity"


export default class ExerciseMapper {
    static mapPortions(
        exercise: Exercicio & {
            muscles:any
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