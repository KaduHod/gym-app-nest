import { PersonalE, AlunoE, UserE } from "src/entitys";

export abstract class AlunoRepositoryI {
    findAll(): Promise<AlunoE[]>
    findBy(args:any): Promise<AlunoE[] | null>
    first(args:any): Promise<AlunoE | null>
    findPersonalOff(user: AlunoE): Promise<PersonalE | null>
}


export abstract class PersonalRepositoryI {
    findAll(): Promise<PersonalE[]>
    findBy(args:any): Promise<PersonalE[] | null>
    first(args:any): Promise<PersonalE | null>
    findAlunos(personal: PersonalE): Promise<AlunoE[]>
}

export abstract class PermissionRepositoryI {
    createAluno(user: UserE): Promise<void> 
    createPersonal(user: UserE): Promise<void>
    createAdmin(user: UserE): Promise<void>
}