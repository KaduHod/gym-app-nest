import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { QueryMuscleGroupDto } from "../muscle.validator";
import ValidateMuscleDtoService from "../services/validateMuscleDto.service";

@Injectable()
export default class QueryMuscleGroupMiddleware implements NestMiddleware {

    constructor(
        private ValidateMuscleDtoService: ValidateMuscleDtoService,
        private QueryMuscleGroupDto: QueryMuscleGroupDto
    ){}

    async use(req: Request, res: Response, next: NextFunction) {
        req.body = (await this
                            .ValidateMuscleDtoService
                            .setDto(this.QueryMuscleGroupDto)
                            .setArgs(req.query)
                            .validate())
                            .getValidatedArgs();
        next()
    }
}