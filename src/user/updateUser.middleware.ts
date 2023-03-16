import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import { UserType } from "src/domain/entitys";
import ValidateUserDtoService from "./services/validateUserDto.service";
import { UpdateUserDto } from "./user.validator";

@Injectable()
export default class UpdateUserMiddleware implements NestMiddleware {
    constructor(
        private ValidateUserDtoService: ValidateUserDtoService,
        private UpdateUserDto: UpdateUserDto
    ){}
    async use(req: Request, res:Request, next: NextFunction) {
        req.body = (await this
            .ValidateUserDtoService
            .setDto<UpdateUserDto>(this.UpdateUserDto)
            .setArgs(req.body as UserType)
            .validate()
        ).getValidatedArgs()
        next()
    }
}