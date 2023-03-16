import { Body, Controller, Get, HttpException, HttpStatus, Put, Query, Res } from '@nestjs/common';
import { DuplicatedData, UserNotFound } from 'src/errors/app.errors';
import { HttpDuplicatedData, HttpUserNotFoundError } from 'src/errors/response.errors';
import { UserRepositoryI } from 'src/knex/repository';
import UpdateUserService from './services/updateUser.service';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
        private UserRepository: UserRepositoryI
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
            return {
                message:"Updated",
                user:updatedUser
            }
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
