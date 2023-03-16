import { AlunoE, PersonalE, UserE } from "src/domain/entitys";
import { CreateUserDto } from "../user.validator";
import { validate } from 'class-validator'
import { pruneUndefineds } from "src/utils/object.helper";
import { InvalidUserError } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { Injectable } from "@nestjs/common";

type UserType = UserE | PersonalE | AlunoE


@Injectable()
export default class ValidateCreateUserArgsService {
    private userArgs: Partial<UserType> | UserType
    private validatedUser:UserE

    constructor(
        private CreateUserDto: CreateUserDto
    ){}
    
    setUserArgs(userArgs: Partial<UserType> | UserType): this {
        this.userArgs = userArgs
        return this
    }

    async validate(): Promise<this> {
        this.CreateUserDto.name = this.userArgs.name
        this.CreateUserDto.nickname = this.userArgs.nickname
        this.CreateUserDto.email = this.userArgs.email
        this.CreateUserDto.cellphone = this.userArgs.cellphone
        this.CreateUserDto.password = this.userArgs.password

        const errors = await validate(this.CreateUserDto)

        if (errors.length){
            throw new InvalidUserError(
                errorMapper(errors)
            )
        }
        
        this.validatedUser = pruneUndefineds(this.CreateUserDto) as UserE;
        return this
    }

    getValidatedUser() {
        return this.validatedUser;
    }
}