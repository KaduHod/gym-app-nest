import { Controller, Get, Inject } from '@nestjs/common';
import UserRepository from 'src/knex/user.repository';

@Controller('user')
export class UserController {
    constructor(){}

    @Get("/")
    async index(){
        
    }
}
