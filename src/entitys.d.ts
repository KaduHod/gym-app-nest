type table = {
    id: number
}

export type UserE = table & {
    name: string
    nickname: string
    email: string
    password: string
    cellphone: string
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
    portions: MusclePortionE[]
}

export type MusclePortionE = table & {
    name: string
    image: string
    muscleGroup: MuscleGroupE
}