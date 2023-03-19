import { Entity } from "./entity.decorator";
import { validate } from 'class-validator'
import { ValidationError } from "@nestjs/common/interfaces/external/validation-error.interface";

@Entity()
export default class Model {
    constructor(){}
    validate():  Promise<ValidationError[]> {
        return validate(this)
    }
}