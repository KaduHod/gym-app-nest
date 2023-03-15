import { AlunoE, PersonalE, UserE } from "src/domain/entitys";
import { CreateUserDto } from "../user.validator";
import { validate } from 'class-validator'
import { pruneUndefineds } from "src/utils/object.helper";
import { InvalidUserError } from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { Injectable } from "@nestjs/common";

type UserType = UserE | PersonalE | AlunoE

export default async function ValidateUser(args: UserType) {
    const userDto = new CreateUserDto()

    userDto.name = args.name
    userDto.nickname = args.name
    userDto.email = args.name
    userDto.cellphone = args.name
    userDto.password = args.name

    const errors = await validate(userDto)

    if (errors.length) {
        throw new InvalidUserError(
            errorMapper(errors)
        )
    }

    return pruneUndefineds(userDto)
}