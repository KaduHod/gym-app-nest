import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { registerDecorator, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator'
import { Aluno } from 'src/aluno/Alunos.entity'
import { Not, Repository } from 'typeorm'
const name = "Aluno has personal"
const async = true

@ValidatorConstraint({name, async})
@Injectable()
export class AlunoHasPersonalRule implements ValidatorConstraintInterface {
    constructor(
        @InjectRepository(Aluno) private alunoRepository: Repository<Aluno>
    ){}

    async validate(id: number, validationArguments?: ValidationArguments): Promise<boolean> {
        id = Number(id)
        const [mustExist] = validationArguments.constraints;
        const where = {
            id,
            personal_id: mustExist ? Not(null) : null
        }
        const exist = await this.alunoRepository.exist({where})
        return exist
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        const [mustExist] = validationArguments.constraints;
        const msg = `Aluno`;
        const warning = mustExist ? " does not have personal or not found!" : " already has personal!";
        return msg + warning;
    }

}

export const AlunoHasPersonal = (mustExist:boolean = true):PropertyDecorator => (target:any, propertyName:string) => {
    registerDecorator({
        name, async, 
        validator: AlunoHasPersonalRule,
        propertyName,
        target: target.constructor,
        constraints: [mustExist]
    })
}