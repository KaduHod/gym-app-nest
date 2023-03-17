import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { QueryUserDto } from "../user.validator";
import ValidateUserDtoService from "../services/validateUserDto.service";

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