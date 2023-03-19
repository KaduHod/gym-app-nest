import { Body, Controller, Header, HttpCode, Post, Put } from "@nestjs/common";
import { AlunoE, UserE } from "src/domain/entitys";
import UpdateUserService from "src/user/services/updateUser.service";
import { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
import { Mapper } from "src/utils/mappers.helper";
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
        return {message:"created", aluno:await this.CreateAlunoService.main(args as AlunoE)}
    }

    @Put()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async update(@Body() args: UpdateUserDto) {
        this.UpdateUserService.setUser(args as UserE)
        const aluno = await this.UpdateUserService.main()
        return {
            message:"updated", 
            aluno: Mapper.mapToHttp(aluno)
        }
    }
}