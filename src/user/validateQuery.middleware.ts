import { NestMiddleware, Query } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserE } from "src/domain/entitys";
import { QueryUserDto } from "./user.validator";
import { validate } from 'class-validator'
import { pruneUndefineds } from "src/utils/object.helper";
import { HttpInvalidUserParams } from "src/errors/response.errors";
import { errorMapper } from "src/utils/validator.helper";

export default class ValidateUserQueryMiddleware implements NestMiddleware {
    async use(req: Request, res:Response, next: NextFunction) {
        req.body.query = await this.validate(req.query)
        req.query = {}
        next()
    }

    async validate(query:any) {
        query as UserE
        const queryUserDto = new QueryUserDto()
        queryUserDto.id = query.id
        queryUserDto.name = query.name
        queryUserDto.nickname = query.nickname
        queryUserDto.email = query.email
        queryUserDto.cellphone = query.cellphone

        const errors = await validate(queryUserDto)

        if (errors.length) {
            throw new HttpInvalidUserParams(
                errorMapper(errors)
            )
        }
        
        return pruneUndefineds(queryUserDto);
    }
}