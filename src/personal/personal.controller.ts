import { Body, Controller, Get, Header, HttpCode, Post, Put } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PersonalRepositoryI } from "src/knex/repository";
import UpdateUserService from "src/user/services/updateUser.service";
import AttachAlunoDto, { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
import { Mapper } from "src/utils/mappers.helper";
import AttachAlunoService from "./services/attachAluno.service";
import CreatePersonalService from "./services/createPersonal.service";




@Controller("personal")
export class PersonalController {
    constructor(
        private PersonalRepository: PersonalRepositoryI,
        private CreatePersonalService: CreatePersonalService,
        private UpdateUserService: UpdateUserService,
        private AttachAlunoService: AttachAlunoService
    ) {}

    @Get('/')
    async all(){
        return this.PersonalRepository.findAll()
    }

    @Post('/') 
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(@Body() body: CreateUserDto) {
        await this.CreatePersonalService.main(body as UserE)
        return {
            message:"created",
            personal: Mapper.mapToHttp(
                this.CreatePersonalService.getUser()
            ) 
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
        const aluno = this.AttachAlunoService.getAluno()
        return {
            message: 'attached',
            aluno: Mapper.mapToHttp(aluno)
        }
    }
}