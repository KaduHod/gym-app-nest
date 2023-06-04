import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import UserController  from './user.controller';
import NotEmptyBodyMiddleware from 'src/notEmptyBody.middleware';
import { User } from 'src/modules/user/Users.entity';
import { Permissions } from 'src/modules/user/Permissions.entity';
import RegisterCircunferenciasService from './services/anthropometry/RegisterCircunferencias.service';
import GetUserService from './services/getUser.service';
import CreateUserService from './services/createUser.service';
import UpdateUserService  from './services/updateUser.service';
import UpdateCircunferenciasService from './services/anthropometry/UpdateCircunferencias.service';
import RegisterBasicAnthropometryService from './services/anthropometry/RegisterBasic.service';
import UpdateBasicAnthropometryService from './services/anthropometry/UpdateBasic.service';
import RegisterDobrasService from './services/anthropometry/RegisterDobras.service';
import UpdateDobrasService from './services/anthropometry/UpdateDobras.service';
import { Medidas } from '../medidas/Medidas.entity';
import { Dobrascutaneas } from '../medidas/Dobrascutaneas.entity';
import { Circunferencias } from '../medidas/Circunferencias.entity';
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
        GetUserService
    ],
    exports:[
        CreateUserService,
        UpdateUserService,
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
