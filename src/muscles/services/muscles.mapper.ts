import { MusclePortion } from "@prisma/client";
import EntityMapper from "src/domain/domain.mapper";

export class PortionMapper {
    static mapArticulations<T extends MusclePortion & {Articulations:any[]}>(item: T){
        const {Articulations,...portion} = item
        const arts = Articulations.map( ({Articulation}) => Articulation)
        return {
            ...portion, Articulations: arts
        }
    }

    static mapExercicios<T extends MusclePortion & {Exercises: any[]}>(item: T){
        let {Exercises, ...portion} = item
        Exercises = Exercises.map(({Exercicio}) => Exercicio)
        return {
            ...portion,
            Exercises
        }

    }

    static removeCommomFieldsGlobal<T extends MusclePortion & {Group?:any, Articulations?: any[], Exercises?:any[]}>(portion:T) {
        const { muscleGroup_id, ...muscle} = portion
        if(muscle.Articulations) {
            muscle.Articulations = muscle.Articulations.map(EntityMapper.removeCommonFields);
        }

        if(muscle.Group) {
            muscle.Group = EntityMapper.removeCommonFields(muscle.Group)
        }

        if(muscle.Exercises) {
            muscle.Exercises = muscle.Exercises.map(EntityMapper.removeCommonFields);
        }

        return EntityMapper.removeCommonFields(muscle)
    }   

}