import { PersonalE, AlunoE } from "src/entitys";

export interface AlunoRepositoryI {
    findAll(): Promise<AlunoE[]>
    findBy(): Promise<AlunoE[] | null>
    first(): Promise<AlunoE | null>
    findPersonalOff(user: AlunoE): Promise<PersonalE | null>
}

export interface PersonalRepositoryI {
    findAll(): Promise<PersonalE[]>
    findBy(): Promise<PersonalE[] | null>
    first(): Promise<PersonalE | null>
    findAlunos(personal: PersonalE): Promise<AlunoE[]>
}