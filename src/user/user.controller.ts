import { Body, Controller, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';
import * as UserDto from './user.dto';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
    ){}
    
    @Put('/')
    async update(@Body() args: UserDto.UpdateUser) {
        const updatedUser = await this.UpdateUserService.main(args)
        return {
            message:"Updated",
            user: updatedUser
        }
    }
}
