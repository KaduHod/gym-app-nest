import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import UpdateUserService from './services/updateUser.service';
import RegisterBasicAnthropometryService from './services/anthropometry/RegisterBasic.service'
import UpdateBasicAnthropometryService from './services/anthropometry/UpdateBasic.service';
import RegisterDobrasService from './services/anthropometry/RegisterDobras.service';
import * as UserDto from './user.dto';
import UpdateDobrasService from './services/anthropometry/UpdateDobras.service';
import GetUserService from './services/getUser.service';
import RegisterCircunferencias from './services/anthropometry/RegisterCircunferencias.service';
import UpdateCircunferenciasService from './services/anthropometry/UpdateCircunferencias.service';



@Controller('user')
export default class UserController {
    constructor(
        private updateUserService: UpdateUserService,
        private registerBasicAnthropometryService: RegisterBasicAnthropometryService,
        private updateBasicAnthropometryService: UpdateBasicAnthropometryService,
        private registerDobrasService: RegisterDobrasService,
        private updateDobrasService: UpdateDobrasService,
        private getUserService: GetUserService,
        private registerCircunferenciasService: RegisterCircunferencias,
        private updateCircunferenciasService: UpdateCircunferenciasService
    ){}

    @Get(":id")
    async GetUser(@Param("") args:UserDto.GetUser) {
        return await this.getUserService.main(args)
    }
    
    @Put('/')
    async update(@Body() args: UserDto.UpdateUser) {
        const updatedUser = await this.updateUserService.main(args)
        return  updatedUser
    }

    @Post("/anthropometry")
    async setBasicAnthropometry(@Body() args: UserDto.CreateBasicAnthropometry) {
        return await this.registerBasicAnthropometryService.main(args)
    }

    @Put("/anthropometry")
    async updateBasicAnthropometry(@Body() args: UserDto.UpdateBasicAnthropometry) {
        const medida =  await this.updateBasicAnthropometryService.main(args)
        return medida
    }

    @Post("/anthropometry/skinfold")
    async registerSkinfoldThickness(@Body() args: UserDto.CreateDobras) {
        return await this.registerDobrasService.main(args)
    }

    @Put("/anthropometry/skinfold")
    async updateSkinfoldThickness(@Body() args: UserDto.UpdateDobras) {
        return await this.updateDobrasService.main(args)
    }

    @Post("/anthropometry/girth")
    async registerGirth(@Body() args: UserDto.CreateCircunferencias) {
        return await this.registerCircunferenciasService.main(args)
    }

    @Put("/anthropometry/girth")
    async updateGirth(@Body() args: UserDto.UpdateCircunferencias) {
        return await this.updateCircunferenciasService.main(args)
    }
}
