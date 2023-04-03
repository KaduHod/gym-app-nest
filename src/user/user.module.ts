import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import UpdateUserService  from './services/updateUser.service';
import UserController  from './user.controller';
import * as UserDto from './user.dto';
import CreateUserService from './services/createUser.service';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterBasicAnthropometryService from './services/anthropometry/RegisterBasic.service';
import UpdateBasicAnthropometryService from './services/anthropometry/UpdateBasic.service';
import RegisterDobrasService from './services/anthropometry/RegisterDobras.service';
import UpdateDobrasService from './services/anthropometry/UpdateDobras.service';
@Module({
    imports:[
        ConfigModule, 
    ],
    controllers: [
        UserController
    ],
    providers: [ 
        UpdateUserService,
        CreateUserService,
        RegisterBasicAnthropometryService,
        UserDto.UpdateUser,
        UserDto.CreateUser,
        UserDto.QueryUser,
        UserDto.AttachAluno,
        UserDto.CreateBasicAnthropometry,
        UpdateBasicAnthropometryService,
        RegisterDobrasService,
        UpdateDobrasService,
        PrismaService
    ],
    exports:[
        UserDto.UpdateUser, 
        UserDto.CreateUser, 
        UserDto.AttachAluno,
        CreateUserService,
        UpdateUserService,
        PrismaService
    ]
})
export class UserModule {}
