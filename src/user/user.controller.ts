import { Body, Controller, Get, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
    ){}

    @Get("/")
    async index(@Body() body){
        // const {query} = body
        // const users = await this.UserRepository.findBy(query) 
        return "users"
    }

    @Put('/')
    async update(@Body() body: any) {
        this.UpdateUserService.setUser(body)
        const updatedUser = await this.UpdateUserService.main()
        return {
            message:"Updated",
            user:updatedUser
        }
    }
}
