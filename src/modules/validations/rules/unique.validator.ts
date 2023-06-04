import { Inject, Injectable } from '@nestjs/common'
import { registerDecorator, ValidationArguments, ValidatorConstraint ,ValidatorConstraintInterface  } from 'class-validator'
import { BaseEntity, DataSource, FindOptions, In, Not } from 'typeorm'

const name = "Unique constraint validator"
const async = true

@ValidatorConstraint({name, async})
@Injectable()
export class UniqueContraintRule implements ValidatorConstraintInterface {
    public foundKeys: string[]
    constructor(
        @Inject("GLOBAL_CONN") private conn: DataSource
    ){}

    async validate(_: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const values = validationArguments.object
        const targetModelConstructor = validationArguments.constraints[0]
        const uniqueFields = validationArguments.constraints[1] as string[]

        if(!uniqueFields.length) return true;

        const repository = this.conn.getRepository(targetModelConstructor());

        const where:FindOptions<any> = uniqueFields.reduce((acc,key) => {
            if(!values[key]) return acc;
            const value = values[key]
            acc[key] = value
            return acc
        }, {})

        if(values["id"]) {
            where["id"] = Not(values["id"])
        }

        const exists = await repository.exist({where})

        return !exists
    }

    defaultMessage?(validationArguments?: ValidationArguments): string {
        const uniqueFields = validationArguments.constraints[1]
        return "Unique " + Object.values(uniqueFields).join(" and ") + " constraint failed!"
    }
}


export function Unique
    <T extends BaseEntity>
    (
        classConstructor: () => { new (): T},
        fields: Extract<keyof T, string>[]
    ): ClassDecorator
{
    return (target:Function) => {
        registerDecorator({
            validator: UniqueContraintRule,
            async: true,
            name,
            target,
            propertyName: "id",
            constraints: [classConstructor, fields]
        })
    }
}
