import { Body, Controller, Header, HttpCode, Post } from "@nestjs/common";
import { CreateUserDto } from "src/user/user.validator";
import CreateAlunoService from "./services/createAluno.service";

@Controller("/aluno")
export default class AlunoController {
    constructor(
        private CreateAlunoService: CreateAlunoService
    ){}

    @Post()
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(@Body() args: CreateUserDto) {
        return {message:"created", aluno:{}}
    }
}