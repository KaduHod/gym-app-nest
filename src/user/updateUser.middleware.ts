import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { UserE } from "src/domain/entitys";
import { HttpInvalidUpdateUserRequest } from "src/errors/response.errors";
import { UpdateUserDto } from "./user.validator";
import { validate } from 'class-validator'

@Injectable()
export class UpdateUserMiddleware implements NestMiddleware {
    async use(req: Request, res:Request, next: NextFunction) {
        const userDto = await this.validateFields(req.body)
        req.body = Object.keys(userDto).reduce( (user:UserE,prop:string) => {
            if(userDto[prop]) {
                return {
                    ...user,
                    [prop]: userDto[prop]
                }
            }
            return user
        },{} as UserE)
        next()
    }

    async validateFields(userArgs: UserE): Promise<UpdateUserDto> {
        const userDto = new UpdateUserDto()
        userDto.id = userArgs.id 
        userDto.name = userArgs.name
        userDto.email = userArgs.email
        userDto.password = userArgs.password
        userDto.cellphone = userArgs.cellphone
        userDto.nickname = userArgs.nickname
        const errors = await validate(userDto)
        
        if (errors.length) {
            throw new HttpInvalidUpdateUserRequest(errors.map( err => {
                return {
                    field: err.property,
                    errors: Object.values(err.constraints)
                }
            }))
        }

        return userDto
    }
}