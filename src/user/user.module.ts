import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import UpdateUserService  from './services/updateUser.service';
import UserController  from './user.controller';
import * as UserDto from './user.dto';
import CreateUserService from './services/createUser.service';
import { PrismaService } from 'src/prisma/prisma.service';
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
        UserDto.UpdateUser,
        UserDto.CreateUser,
        UserDto.QueryUser,
        UserDto.AttachAluno,
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
