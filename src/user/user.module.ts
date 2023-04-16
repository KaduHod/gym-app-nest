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
import { UsersPermission } from 'src/domain/UsersPermission.entity';
import { User } from 'src/domain/Users.entity';
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
    imports:[
        ConfigModule, 
        TypeOrmModule.forFeature([User, UsersPermission])
    ],
    controllers: [
        UserController
    ],
    providers: [ 
        UpdateUserService,
        CreateUserService,
        RegisterBasicAnthropometryService,
        UserDto.CreateBasicAnthropometry,
        UpdateBasicAnthropometryService,
        RegisterDobrasService,
        UpdateDobrasService,
        PrismaService,
    ],
    exports:[
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
