import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { QueryUserDto } from "../user.validator";
import ValidateUserDtoService from "../services/validateUserDto.service";

@Injectable()
export default class ValidateUserQueryMiddleware implements NestMiddleware {
    constructor(
        private ValidateUserDtoService: ValidateUserDtoService,
        private QueryUserDto: QueryUserDto
    ){}
    async use(req: Request, res:Response, next: NextFunction) {
        console.log(this.QueryUserDto, this.ValidateUserDtoService)
        req.body.query = (await this
                                    .ValidateUserDtoService
                                    .setDto(this.QueryUserDto)
                                    .setArgs(req.query).validate()
                                ).getValidatedArgs();
        req.query = {}
        next()
    }
}