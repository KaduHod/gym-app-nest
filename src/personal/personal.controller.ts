import { Body, Controller, Get, Header, HttpCode, Post, Put } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserE } from "src/domain/entitys";
import { PrismaService } from "src/prisma/prisma.service";
import UpdateUserService from "src/user/services/updateUser.service";
import AttachAlunoDto, { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
import AttachAlunoService from "./services/attachAluno.service";
import CreatePersonalService from "./services/createPersonal.service";




@Controller("personal")
export class PersonalController {
    constructor(
        private PrismaService: PrismaService,
        private CreatePersonalService: CreatePersonalService,
        private UpdateUserService: UpdateUserService,
        private AttachAlunoService: AttachAlunoService
    ) {}

    @Post('/') 
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(@Body() body: CreateUserDto) {
        const personal = await this.CreatePersonalService.main(body as User)
        return {
            message:"created",
            personal
        };
    }

    @Put()
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async update(@Body() args: UpdateUserDto) {
        this.UpdateUserService.setUser(args as UserE)
        return {
            message:"updated", 
            personal: await this.UpdateUserService.main()
        }
    }

    @Post("/attach-aluno")
    @HttpCode(200)
    @Header('Content-Type', 'application/json')
    async attachAluno(@Body() args:AttachAlunoDto) {
        await this.AttachAlunoService.main(args.aluno_id, args.personal_id)
        return {
            message: 'attached',
        }
    }
}