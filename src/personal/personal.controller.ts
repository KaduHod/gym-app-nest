import { Body, Controller, Get, Post, Put, Res } from "@nestjs/common";
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
        private CreatePersonalSerivce: CreatePersonalService,
    ) {}

    @Get('/')
    async all(){
        return this.PersonalRepository.findAll()
    }

    @Post('/') 
    async create(
        @Body() body: UserE, 
        @Res() response: Response
    ) {
        try {
            await this.CreatePersonalSerivce.setUser(body)
            await this.CreatePersonalSerivce.main()
            return response
                    .status(201)
                    .json(this.CreatePersonalSerivce.getUser());

        } catch (error) {
            if (error instanceof DuplicatedData) {
                throw new HttpDuplicatedData(error)
            }

            throw new HttpUnhandledError(error)
        }
    }
}