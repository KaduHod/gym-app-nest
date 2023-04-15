import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
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
import NotEmptyBodyMiddleware from 'src/notEmptyBody.middleware';
import { userProviders } from './user.provider';
import TypeOrmModule from 'src/typeorm/typeorm.module';
@Module({
    imports:[
        ConfigModule, 
        TypeOrmModule
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
        PrismaService,
        ...userProviders
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
export class UserModule {
    configure(consumer:MiddlewareConsumer){
        consumer.apply(NotEmptyBodyMiddleware).forRoutes(
          {path:"/user/*", method: RequestMethod.POST},
          {path:"/user/*", method: RequestMethod.PUT},
          {path:"/user/*", method: RequestMethod.PATCH}
        )
    }
}
