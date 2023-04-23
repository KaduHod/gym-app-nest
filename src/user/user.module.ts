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
import { User } from 'src/entitys/Users.entity';
import {TypeOrmModule} from '@nestjs/typeorm'
import GetUserService from './services/getUser.service';
import { Permissions } from 'src/entitys/Permissions.entity';
import { Medidas } from 'src/entitys/Medidas.entity';
import { Dobrascutaneas } from 'src/entitys/Dobrascutaneas.entity';
import RegisterCircunferenciasService from './services/anthropometry/RegisterCircunferencias.service';
import { Circunferencias } from 'src/entitys/Circunferencias.entity';
import UpdateCircunferenciasService from './services/anthropometry/UpdateCircunferencias.service';
@Module({
    imports:[
        ConfigModule, 
        TypeOrmModule.forFeature([User, Permissions, Medidas, Dobrascutaneas, Circunferencias])
    ],
    controllers: [
        UserController
    ],
    providers: [ 
        UpdateUserService,
        CreateUserService,
        RegisterBasicAnthropometryService,
        UpdateBasicAnthropometryService,
        RegisterDobrasService,
        UpdateDobrasService,
        RegisterCircunferenciasService,
        UpdateCircunferenciasService,
        PrismaService,
        GetUserService
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
