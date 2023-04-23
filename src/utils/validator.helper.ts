import { ValidationError } from 'class-validator'
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { isString, stringIsNumber } from './string.helper';

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

@ValidatorConstraint({name:'boolValidator', async: false})
export class Bool implements ValidatorConstraintInterface  {
    validate(value: any, validationArguments?: ValidationArguments): boolean {
        if(  typeof value === 'string') {
           
            return value === '1' || value === '0' || value === "true" || value === 'false'
        }

        if (typeof value === 'boolean') {
            return true
        }

        return false
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'Portions must be <string>`true | false`, <string>`1 | 0` or <boolean> '
    }

}

@ValidatorConstraint({name:'arrStringOrString', async: false})
export class IsStringOrArrayOfStrings implements ValidatorConstraintInterface  {
    validate(value: any, validationArguments?: ValidationArguments): boolean {
        if (!isString(value) && !Array.isArray(value)) {
            return false;
        }

        if(Array.isArray(value)) {
            value.forEach( item => {
                if (!isString(item)) return false;
            })
        }

        return true
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'must be string or string[]'
    }

}

@ValidatorConstraint({name:'IsNumberString', async: false})
export class IsNumberString implements ValidatorConstraintInterface  {
    validate(value: any, validationArguments?: ValidationArguments): boolean {
        if(Array.isArray(value)) {
            for (const val of value) {
                if(!stringIsNumber(val)) {
                    return false
                }
            }
            return true
        }
        return stringIsNumber(value)
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return `${validationArguments.property} must be a number`
    }

}

// @ValidatorConstraint({name:'IsValidRole', async: false})
// export class IsValidRole implements ValidatorConstraintInterface  {
    // #validRoles = Object.values(exercise_muscle_portions_role);
// 
    // validate(value: any, validationArguments?: ValidationArguments): boolean {
        // 
        // if(Array.isArray(value)) {
            // value.forEach( v => {
                // if(!this.#validRoles.includes(v)) {
                    // return false
                // }
            // })
        // } else {
            // return this.#validRoles.includes(value)
        // }
        // return true
    // }
    // defaultMessage?(validationArguments?: ValidationArguments): string {
        // return `${validationArguments.property} must be a valid role | ${this.#validRoles.join(" | ")} |`
    // }
// 
// }