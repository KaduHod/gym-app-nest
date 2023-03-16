import { InvalidUserError } from "src/errors/app.errors"
import { pruneUndefineds } from "src/utils/object.helper"
import { errorMapper } from "src/utils/validator.helper"
import { CreateUserDto, QueryUserDto, UpdateUserDto } from "../user.validator"
import { validate } from 'class-validator'
import { Injectable } from "@nestjs/common"
import { UserType } from "src/domain/entitys"

type userDtos = CreateUserDto | UpdateUserDto | QueryUserDto

@Injectable()
export default class ValidateUserDtoService {
    private args: UserType | Partial<UserType>
    private userDto: CreateUserDto | UpdateUserDto | QueryUserDto
    private validatedArgs: CreateUserDto | UpdateUserDto | QueryUserDto

    constructor(){}

    setArgs(args:UserType | Partial<UserType>): this{
        this.args = args
        return this
    }

    setDto<T extends userDtos>(dto:userDtos): this{
        this.userDto = dto as T
        return this
    }
    
    async validate(){
        if ( !(this.userDto instanceof CreateUserDto) ) {
            this.userDto.id = this.args.id
        }
        if ( !(this.userDto instanceof QueryUserDto) ) {
            this.userDto.password = this.args.password
        }
        
        this.userDto.name = this.args.name
        this.userDto.nickname = this.args.nickname
        this.userDto.email = this.args.email
        this.userDto.cellphone = this.args.cellphone

        const errors = await validate(this.userDto)

        if (errors.length) {
            throw new InvalidUserError(
                errorMapper(errors)
            )
        }

        this.validatedArgs = pruneUndefineds(this.userDto)

        return this
    }

    getValidatedArgs(){
        return this.validatedArgs as UserType;
    }
}