type table = {
    id: number
    createdAt: Date
    updatedAt: Date
}

export type UserType = UserE | PersonalE | AlunoE

export type UserE = table & {
    name: string
    nickname: string
    email: string
    password: string
    cellphone: string
}

export type Permission = table & {
    title: "aluno" | "personal" | "admin"
}

export type UserFindByArgs = {
    id: number | number[],
    name: string | string[]
    nickname: string | string[]
    email: string | string[]
    password: string | string[]
    cellphone: string | string[]
}

export type AlunoE = table & UserE & {
    personal: PersonalE
}

export type PersonalE = table & UserE & {
    alunos: UserE[]
}

export type ExercicioE = table & {
    name: string
    force: string
    link: string
    execution: string
    mechanic: string
}

export type MuscleGroupE = table & {
    name: string
    image: string
    portions?: MusclePortionE[]
}

export type MusclePortionE = table & {
    name: string
    image: string
    muscleGroup_id: number
    muscleGroup: MuscleGroupE
}


export type ArticulationE = table & {
    name: string
}