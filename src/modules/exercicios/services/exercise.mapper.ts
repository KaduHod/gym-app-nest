import { Exercicio } from "src/modules/exercicios/Exercicios.entity"


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
                return {...musclePortion, role }
            })
        }
    }
}