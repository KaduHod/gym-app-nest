import { Body, Controller, Get, Inject, Put, Res } from '@nestjs/common';
import { Knex } from 'knex';
import { UserE } from 'src/domain/entitys';
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

    @Put('/')
    async update(
        @Body() body: any, 
        @Res() response: Response
    ) {
        try {
            console.log(body)
            return 'oi'
        } catch (error) {
            
        }
    }
}
