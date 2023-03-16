import { HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { isEmpty } from 'class-validator'
import { NextFunction, Request } from "express";

export default class NotEmptyBodyMiddleware implements NestMiddleware {
    use(req: Request, _: any, next:NextFunction) {
        if(isEmpty(req.body)) {
            throw new HttpException("Payload required", HttpStatus.BAD_REQUEST)
        }
        next();
    }
}