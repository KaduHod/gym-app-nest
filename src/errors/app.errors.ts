import { errorFormated } from "src/utils/validator.helper"


export class PersonalAlreadyRegistered extends Error {
    public message: string
        constructor(id:number) {
        super(`Id: ${id} already registered as personal!`)
        this.message = `Id: ${id} already registered as personal!`
    }
}


export class AlunoAlreadyRegistered extends Error {
    public message: string
    constructor(id:number) {
        super(`Id: ${id} already registered as aluno!`)
        this.message = `Id: ${id} already registered as aluno!`
    }
}


export class AdminAlreadyRegistered extends Error {
    
    public message: string
    constructor(id:number) {
        super(`Id: ${id} already registered as admin!`)
        this.message = `Id: ${id} already registered as admin!`
    }
}


export class UserNotFound extends Error {
    constructor() {
        super("User not found")
        this.message = "User not found"
    }
}


export class InvalidUserError extends Error {
    constructor(public errors: errorFormated | errorFormated[]) {
        super()
        this.message = 'Invalid user'
    }
}


export class DuplicatedNickname extends Error {
    constructor() {
        super("Nickname unavailable at the moment!")
        this.message = "Nickname unavailable at the moment!"
    }
}


export class DuplicatedEmail extends Error {
    constructor() {
        super("Email already registered!")
        this.message = "Email already registered!"
    }
}

export class DuplicatedData extends Error {
    constructor(propDuplicated: string) {
        super (`${propDuplicated} already registered!`)
        this.message = `${propDuplicated} already registered!`
    }
}

export class UnhandledError extends Error {
    constructor(err: Error) {
        super(err.message)
        this.message = err.message
    }
}


export class InvalidMuscleError extends Error {
    constructor(public errors: errorFormated | errorFormated[]) {
        super()
    }
}