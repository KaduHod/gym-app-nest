import { Body, Controller, Get, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
    ){}
    
    @Put('/')
    async update(@Body() body: any) {
        this.UpdateUserService.setUser(body)
        const updatedUser = await this.UpdateUserService.main()
        return {
            message:"Updated",
            user: updatedUser
        }
    }
}
