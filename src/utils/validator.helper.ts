import { ValidationError } from 'class-validator'

export type errorFormated = {
    field: string,
    errors: string[]
}

export function errorMapper(errors:ValidationError[]): errorFormated[] {
    return errors.map( err => {
        return {
            field: err.property,
            errors: Object.values(err.constraints)
        }
    })
}