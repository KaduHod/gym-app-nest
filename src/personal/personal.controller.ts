import { Body, Controller, Get, Header, HttpCode, Post, Put } from "@nestjs/common";
import { User } from "src/entitys/Users.entity";
import UpdateUserService from "src/user/services/updateUser.service";
import * as UserDto from "src/user/user.dto";
import AttachAlunoService from "./services/attachAluno.service";
import CreatePersonalService from "./services/createPersonal.service";




@Controller("personal")
export class PersonalController {
    constructor(
        private CreatePersonalService: CreatePersonalService,
        private UpdateUserService: UpdateUserService,
        private AttachAlunoService: AttachAlunoService
    ) {}

    @Post('/') 
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(@Body() body: UserDto.CreateUser) {
        const personal = await this.CreatePersonalService.main(body as User)
        return {
            message:"created",
            personal
        };
    }

    @Put()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async update(@Body() args: UserDto.UpdateUser) {
        return {
            message:"updated", 
            personal: await this.UpdateUserService.main(args)
        }
    }

    @Post("/attach-aluno")
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async attachAluno(@Body() args: UserDto.AttachAluno) {
        await this.AttachAlunoService.main(args)
        return {
            message: 'attached',
        }
    }
}