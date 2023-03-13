import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { UserE, UserFindByArgs } from "src/entitys";
import PersonalRepository from "src/knex/personal.repository";
import UserRepository from "src/knex/user.repository";
import { CreatePersonalService } from "./services/createPersonal.service";



@Controller("personal")
export class PersonalController {
    constructor(
        private PersonalRepository: PersonalRepository,
        private CreatePersonalSerivce: CreatePersonalService,
        private UserRepository: UserRepository
    ) {}

    @Get('/')
    async all(){
        return this.PersonalRepository.findAll()
    }


    @Post('/') 
    async create(@Body() userArgs: UserE, @Res() response: Response) {
        this.CreatePersonalSerivce.setUser(userArgs)
        await this.CreatePersonalSerivce.main()
        return response.status(201).json(this.CreatePersonalSerivce.getUser())
    }
}