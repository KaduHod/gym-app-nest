import { HttpException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import QueryMuscleGroupDto from "./muscle.validator";
import { validate } from 'class-validator'
import { HttpInvalidQueryParams } from "src/errors/response.errors";
import { errorMapper } from "src/utils/validator.helper";
import { pruneUndefineds } from "src/utils/object.helper";


export default class QueryMuscleMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        req.body = await this.validate(req.query)    
        req.query = null    
        next()
    }

    async validate(query:any) {
        const validateDto = new QueryMuscleGroupDto()
        validateDto.id = query.id
        validateDto.name = query.name
        validateDto.portions = query.portions

        const errors = await validate(validateDto)

        if (errors.length) {
            throw new HttpInvalidQueryParams(
                errorMapper(errors)
            )
        }

        return pruneUndefineds(validateDto)
    }
}