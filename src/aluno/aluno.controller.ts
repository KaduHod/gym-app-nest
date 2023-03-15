import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateUserDto } from "src/user/user.validator";
import CreateAlunoService from "./services/createAluno.service";

@Controller("/aluno")
export default class AlunoController {
    constructor(
        private CreateAlunoService: CreateAlunoService
    ){}

    @Post()
    async create(@Body() args: CreateUserDto, @Res() res:Response) {
        
        return res.status(200).send("hello")
    }
}