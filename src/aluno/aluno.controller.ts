import { Body, Controller, Header, HttpCode, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import UpdateUserService from "src/user/services/updateUser.service";
import * as UserDto from "src/user/user.dto";
import CreateAlunoService from "./services/createAluno.service";

@Controller("/aluno")
export default class AlunoController {
    constructor(
        private CreateAlunoService: CreateAlunoService,
        private UpdateUserService: UpdateUserService
    ){}

    @Post()
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(@Body() args: UserDto.CreateUser) {
        const aluno = await this.CreateAlunoService.main(args as User);
        return {
            message:"created", 
            aluno
        }
    }

    @Put()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async update(@Body() args: UserDto.UpdateUser) {
        const aluno = await this.UpdateUserService.main(args)
        return {
            message:"updated", 
            aluno
        }
    }
}