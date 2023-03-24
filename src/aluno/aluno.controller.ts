import { Body, Controller, Header, HttpCode, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import EntityMapper from "src/domain/domain.mapper";
import UpdateUserService from "src/user/services/updateUser.service";
import { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
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
    async create(@Body() args: CreateUserDto) {
        const aluno = await this.CreateAlunoService.main(args as User);
        return {
            message:"created", 
            aluno: EntityMapper.removeCommonFields(aluno)
        }
    }

    @Put()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async update(@Body() args: UpdateUserDto) {
        this.UpdateUserService.setUser(args as User)
        const aluno = await this.UpdateUserService.main()
        return {
            message:"updated", 
            aluno: EntityMapper.removeCommonFields(aluno) 
        }
    }
}