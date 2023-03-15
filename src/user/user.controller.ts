import { Body, Controller, Get, HttpException, HttpStatus, Put, Query, Res } from '@nestjs/common';
import { UserE } from 'src/domain/entitys';
import { DuplicatedData, UserNotFound } from 'src/errors/app.errors';
import { HttpDuplicatedData, HttpUserNotFoundError } from 'src/errors/response.errors';
import UserRepository from 'src/knex/user.repository';
import UpdateUserService from './services/updateUser.service';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
        private UserRepository: UserRepository
    ){}

    @Get("/")
    async index(@Body() body){
        const {query} = body
        return await this.UserRepository.findBy(query)
    }

    @Put('/')
    async update(@Body() body: any) {
        try {
            this.UpdateUserService.setUser(body)
            const updatedUser = await this.UpdateUserService.main()
            return updatedUser
        } catch (error) {
            if (error instanceof UserNotFound) {
                throw new HttpUserNotFoundError(error)
            }
            if (error instanceof DuplicatedData){
                throw new HttpDuplicatedData(error)
            }
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR, {cause: error});
        }
    }
}
