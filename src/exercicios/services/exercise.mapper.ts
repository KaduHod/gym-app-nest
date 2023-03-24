import { Exercicio } from "@prisma/client";

export default class ExerciseMapper {
    static mapPortions<T extends Exercicio & {exercise_muscle_portions:any[]}>(item: T): Omit<T, "exercise_muscle_portions">{
        const {exercise_muscle_portions, ...rest} = item
        item.Portions

        return {
            ...rest
        }
    }
}