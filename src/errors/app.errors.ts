import { errorFormated } from "src/utils/validator.helper"

export class PersonalAlreadyRegistered extends Error {
    constructor(id: number) {
        super(`Id ${id} already registered as personal!`)
    }
}

export class AlunoAlreadyRegistered extends Error {
    constructor(id: number) {
        super(`Id ${id} already registered as aluno!`)
    }
}

export class AdminAlreadyRegistered extends Error {
    constructor(id: number) {
        super(`Id ${id} already registered as admin!`)
    }
}

export class InvalidUserError extends Error {
    constructor(errors: errorFormated | errorFormated[]) {
        super(errors.toString())
    }
}

export class DuplicatedNickname extends Error {
    constructor() {
        super("Nickname unavailable at the moment!")
    }
}

export class DuplicatedEmail extends Error {
    constructor() {
        super("Email already registered!")
    }
}

export class DuplicatedData extends Error {
    constructor(propDuplicated: string) {
        super (`${propDuplicated} already registered!`)
    }
}

export const UnhandledError = (error:Error) => {
    throw new Error(error.message)
}
