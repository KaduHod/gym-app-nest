import { Body, Controller, Get, Header, HttpCode, Post, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { UserE } from "src/domain/entitys";
import { DuplicatedData } from "src/errors/app.errors";
import { HttpDuplicatedData, HttpUnhandledError } from "src/errors/response.errors";
import { PersonalRepositoryI } from "src/knex/repository";
import CreatePersonalService from "./services/createPersonal.service";



@Controller("personal")
export class PersonalController {
    constructor(
        private PersonalRepository: PersonalRepositoryI,
        private CreatePersonalService: CreatePersonalService,
    ) {}

    @Get('/')
    async all(){
        return this.PersonalRepository.findAll()
    }

    @Post('/') 
    @HttpCode(201)
    @Header('Content-Type', 'application/json')
    async create(
        @Body() body: UserE, 
    ) {
        await this.CreatePersonalService.main(body)
        return {
            message:"created",
            personal:this.CreatePersonalService.getUser()
        };
    }
}