import { Body, Controller, Get, Header, HttpCode, Post, Put } from "@nestjs/common";
import { UserE } from "src/domain/entitys";
import { PersonalRepositoryI } from "src/knex/repository";
import UpdateUserService from "src/user/services/updateUser.service";
import { CreateUserDto, UpdateUserDto } from "src/user/user.validator";
import CreatePersonalService from "./services/createPersonal.service";



@Controller("personal")
export class PersonalController {
    constructor(
        private PersonalRepository: PersonalRepositoryI,
        private CreatePersonalService: CreatePersonalService,
        private UpdateUserService: UpdateUserService
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
            personal:this.CreatePersonalService.getUser()
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
}