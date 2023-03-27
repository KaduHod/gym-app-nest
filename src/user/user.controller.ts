import { Body, Controller, Get, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';
import { UpdateUserDto } from './user.validator';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
    ){}
    
    @Put('/')
    async update(@Body() args: UpdateUserDto) {
        this.UpdateUserService.setUser(args)
        const updatedUser = await this.UpdateUserService.main()
        return {
            message:"Updated",
            user: updatedUser
        }
    }
}
