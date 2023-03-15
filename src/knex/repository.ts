import { MuscleGroupE, MusclePortionE } from "src/domain/entitys";
import { PersonalE, AlunoE, UserE } from "src/domain/entitys";


export abstract class RepositoryI<T> {
    abstract findAll(): Promise<T[]>
    abstract findBy(args:any): Promise<T[]>
    abstract first(args:any): Promise<T>
}

export abstract class AlunoRepositoryI extends RepositoryI<AlunoE> {
    abstract findPersonalOff(user: AlunoE): Promise<AlunoE | null>
}

export abstract class UserRepositoryI extends RepositoryI<UserE> {
    abstract exists(args:any): Promise<any>
}

export abstract class PersonalRepositoryI extends RepositoryI<PersonalE> {
    abstract findAlunos(personal: PersonalE): Promise<PersonalE[]>
}

export abstract class PermissionRepositoryI {
    abstract createAluno(user: UserE): Promise<any> 
    abstract createPersonal(user: UserE): Promise<any>
    abstract createAdmin(user: UserE): Promise<any>
}

export abstract class MuscleGroupRepositoryI {
    abstract findBy(args: Partial<MuscleGroupE>)
    abstract first(args: Partial<MuscleGroupE>)
    abstract findAll(): Promise<MuscleGroupE[]>
}

export abstract class MusclePortionRepositoryI {
    abstract findByMuscleGroupId(muscleGroupIds: number | number[])
    abstract findAll(): Promise<MusclePortionE[]>
}