import { Controller, Get, Inject } from '@nestjs/common';
import UserRepository from 'src/knex/user.repository';

@Controller('user')
export class UserController {
    constructor(@Inject(UserRepository) private UserRepository: UserRepository){}

    @Get("/")
    async index(){
        return JSON.stringify(await this.UserRepository.listAll())
    }
}
