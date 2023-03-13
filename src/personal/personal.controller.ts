import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserE, UserFindByArgs } from "src/entitys";
import PersonalRepository from "src/knex/personal.repository";
import { CreatePersonalService } from "./services/createPersonal.service";



@Controller("personal")
export class PersonalController {
    constructor(
        private personalRepository: PersonalRepository,
        private CreatePersonalSerivce: CreatePersonalService
    ) {}

    @Get('/')
    async all(){
        return this.personalRepository.findAll()
    }


    @Post('/') 
    async create(@Body() userArgs: UserE) {
        this.CreatePersonalSerivce.setUser(userArgs)
        console.log(this.CreatePersonalSerivce)
    }
}