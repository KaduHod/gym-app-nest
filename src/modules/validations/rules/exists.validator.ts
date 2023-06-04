import { BaseEntity, DataSource } from "typeorm";
import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Inject, Injectable } from "@nestjs/common";

const name = "Exsits constraint validator";
const async = true

@ValidatorConstraint({name: "Exsits constraint validator", async: true})
@Injectable()
export class ExistsModelRule implements ValidatorConstraintInterface {
    constructor(
        @Inject("GLOBAL_CONN") private conn: DataSource
    ){}

    async validate(id: number, validationArguments?: ValidationArguments): Promise<boolean> {
        id = Number(id)
        const [targetClassConstructor, mustExists] = validationArguments.constraints;
        const repository = this.conn.getRepository(targetClassConstructor());
        const exists = await repository.exist({where:{id}})
        if(mustExists) return exists
        return !exists
    } 
    defaultMessage?(validationArguments?: ValidationArguments): string {
        const [targetClassConstructor, mustExists] = validationArguments.constraints;
        const msg = `${targetClassConstructor().name} `
        if(mustExists) {
            return msg + " not found!"
        }
        return msg + " already exists!"
    }

}

export function Exists
    <T extends BaseEntity>
    (
        targetModelConstructor: () => {new ():T},
        mustExists: boolean = false
    ): PropertyDecorator
{
    return (target: any, propertyName:string) => {
        registerDecorator({
            validator: ExistsModelRule,
            name,
            async,
            target: target.constructor,
            propertyName,
            constraints: [targetModelConstructor, mustExists]
        })
    }
}