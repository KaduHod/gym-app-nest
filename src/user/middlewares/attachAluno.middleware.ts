import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
import AttachAlunoDto from "../user.validator";
import { validate } from 'class-validator'
import InvalidAttachAlunoParams from "src/errors/app.errors";
import { errorMapper } from "src/utils/validator.helper";
import { REQUEST } from "@nestjs/core";

@Injectable()
export default class AttachAlunoMiddleware implements NestMiddleware {
    constructor(
        private AttachAlunoDto: AttachAlunoDto
    ){}

    async use(req: Request, res:Request, next: NextFunction) {
        
        this.AttachAlunoDto.aluno_id = req.body.aluno_id
        this.AttachAlunoDto.personal_id = req.body.personal_id

        const errors = await validate(this.AttachAlunoDto)

        if (errors.length) {
            throw new InvalidAttachAlunoParams(
                errorMapper(errors)
            )
        }
        
        req.body = this.AttachAlunoDto

        next()       
    }

}