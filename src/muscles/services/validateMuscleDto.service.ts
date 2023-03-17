import { MuscleGroupE } from "src/domain/entitys";
import QueryMuscleGroupDto from "../muscle.validator";

export default class ValidateMuscleGroupQueryDto {
    private dto: QueryMuscleGroupDto
    private args: MuscleGroupE | Partial<MuscleGroupE | any>
    constructor(){}

    setArgs(args:MuscleGroupE | Partial<MuscleGroupE>): this{
        this.args = args
        return this
    }

    setDto(dto:QueryMuscleGroupDto): this{
        this.dto = dto 
        return this
    }
}