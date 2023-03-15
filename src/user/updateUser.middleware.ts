import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { UserE } from "src/domain/entitys";
import { HttpInvalidUpdateUserRequest } from "src/errors/response.errors";
import { UpdateUserDto } from "./user.validator";
import { validate } from 'class-validator'
import { errorMapper } from "src/utils/validator.helper";
import { pruneUndefineds } from "src/utils/object.helper";

@Injectable()
export default class UpdateUserMiddleware implements NestMiddleware {
    async use(req: Request, res:Request, next: NextFunction) {
        req.body = await this.validateFields(req.body)
        next()
    }

    async validateFields(userArgs: UserE): Promise<Partial<UpdateUserDto>> {
        const userDto = new UpdateUserDto()
        userDto.id = userArgs.id 
        userDto.name = userArgs.name
        userDto.email = userArgs.email
        userDto.password = userArgs.password
        userDto.cellphone = userArgs.cellphone
        userDto.nickname = userArgs.nickname
        const errors = await validate(userDto)
        
        if (errors.length) {
            throw new HttpInvalidUpdateUserRequest(
                errorMapper(errors)
            )
        }

        return pruneUndefineds(userDto)
    }
}