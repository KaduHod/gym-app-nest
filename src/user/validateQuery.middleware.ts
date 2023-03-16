import { NestMiddleware, Query } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserE } from "src/domain/entitys";
import { QueryUserDto } from "./user.validator";
import { validate } from 'class-validator'
import { pruneUndefineds } from "src/utils/object.helper";
import { HttpInvalidUserParams } from "src/errors/response.errors";
import { errorMapper } from "src/utils/validator.helper";
import ValidateUserDtoService from "./services/validateUserDto.service";

export default class ValidateUserQueryMiddleware implements NestMiddleware {
    constructor(
        private ValidateUserDtoService: ValidateUserDtoService,
        private QueryUserDto: QueryUserDto
    ){}
    async use(req: Request, res:Response, next: NextFunction) {
        req.body.query = (await this
                                    .ValidateUserDtoService
                                    .setDto(this.QueryUserDto)
                                    .setArgs(req.query).validate()
                                ).getValidatedArgs();
        req.query = {}
        next()
    }
}