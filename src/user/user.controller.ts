import { Body, Controller, Post, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';
import RegisterBasicAnthropometryService from './services/anthropometry/RegisterBasic.service'
import UpdateBasicAnthropometryService from './services/anthropometry/UpdateBasic.service';
import RegisterDobrasService from './services/anthropometry/RegisterDobras.service';
import * as UserDto from './user.dto';
import UpdateDobrasService from './services/anthropometry/UpdateDobras.service';

@Controller('user')
export default class UserController {
    constructor(
        private UpdateUserService: UpdateUserService,
        private RegisterBasicAnthropometryService: RegisterBasicAnthropometryService,
        private UpdateBasicAnthropometryService: UpdateBasicAnthropometryService,
        private RegisterDobrasService: RegisterDobrasService,
        private UpdateDobrasService: UpdateDobrasService
    ){}
    
    @Put('/')
    async update(@Body() args: UserDto.UpdateUser) {
        const updatedUser = await this.UpdateUserService.main(args)
        return {
            message:"Updated",
            user: updatedUser
        }
    }

    @Post("/anthropometry")
    async setBasicAnthropometry(@Body() args: UserDto.CreateBasicBasicAnthropometry) {
        return  {
            message: "Created",
            medida: await this.RegisterBasicAnthropometryService.main(args)
        }
    }

    @Put("/anthropometry")
    async updateBasicAnthropometry(@Body() args: UserDto.UpdateBasicBasicAnthropometry) {
        const medida =  await this.UpdateBasicAnthropometryService.main(args)
        console.log({medida})
        return {
            message: "Updated",
            medida
        }
    }

    @Post("/anthropometry/skinfold")
    async registerSkinfoldThickness(@Body() args: UserDto.CreateDobras) {
        return {
            message: "Created",
            skinfold: await this.RegisterDobrasService.main(args)
        }
    }

    @Put("/anthropometry/skinfold")
    async updateSkinfoldThickness(@Body() args: UserDto.UpdateDobras) {
        return {
            message: "Updated",
            skinfold: await this.UpdateDobrasService.main(args)
        }
    }
}
