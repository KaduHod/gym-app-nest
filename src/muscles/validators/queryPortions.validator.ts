import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({name:'PortionValidator', async: false})
export default class PortionBool implements ValidatorConstraintInterface  {
    validate(value: any, validationArguments?: ValidationArguments): boolean {
        if(  typeof value === 'string') {
            return value === '1' || value === "true" 
        }

        if (typeof value === 'boolean') {
            return value
        }

        return false
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'Portions must be <string>`true`, <string>`1` or <boolean> '
    }

}