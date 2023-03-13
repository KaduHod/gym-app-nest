import { Controller, Get, Inject } from '@nestjs/common';
import { Knex } from 'knex';
import UserRepository from 'src/knex/user.repository';

@Controller('user')
export class UserController {
    constructor(
        private UserRepository:UserRepository
    ){

    }

    @Get("/")
    async index(){
        return 'hello world'
    }
}
