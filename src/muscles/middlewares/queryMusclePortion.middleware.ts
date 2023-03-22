import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { QueryMusclePortionDto } from "../muscle.validator";
import ValidateMuscleDtoService from "../services/validateMuscleDto.service";

@Injectable()
export default class QueryMusclePortionMiddleware implements NestMiddleware {

    constructor(
        private ValidateMuscleDtoService: ValidateMuscleDtoService,
        private QueryMusclePortionDto: QueryMusclePortionDto
    ){}

    async use(req: Request, res: Response, next: NextFunction) {
        req.body = (await this
                            .ValidateMuscleDtoService
                            .setDto(this.QueryMusclePortionDto)
                            .setArgs(req.query)
                            .validate())
                            .getValidatedArgs();
        next()
    }
}