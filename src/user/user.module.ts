import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import KnexModule from 'src/knex/knex.module';
import { UserRepositoryI } from 'src/knex/repository';
import UserRepository from 'src/knex/user.repository';
import UpdateUserService  from './services/updateUser.service';
import ValidateUserDtoService from './services/validateUserDto.service';
import UpdateUserMiddleware  from './middlewares/updateUser.middleware';
import UserController  from './user.controller';
import { CreateUserDto, UpdateUserDto } from './user.validator';
import ValidateUserQueryMiddleware from './middlewares/validateQuery.middleware';
import CrateUserMiddleware  from './middlewares/createUser.middleware'
import CreateUserService from './services/createUser.service';

@Module({
    imports:[
        ConfigModule, 
        KnexModule,  
    ],
    controllers: [
        UserController,
    ],
    providers: [ 
        {
            provide:UserRepositoryI,
            useClass: UserRepository
        },
        ValidateUserDtoService,
        UpdateUserService,
        CreateUserService,
        UpdateUserDto,
        CreateUserDto
    ],
    exports:[
        UserRepositoryI, 
        UpdateUserDto, 
        CreateUserDto, 
        ValidateUserDtoService, 
        CreateUserService,
        UpdateUserService,
    ]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UpdateUserMiddleware).forRoutes(
            {path:'personal', method: RequestMethod.PUT},
            {path:'user', method: RequestMethod.PUT},
            {path:'aluno', method: RequestMethod.PUT},
        ).apply(ValidateUserQueryMiddleware).forRoutes(
            {path:'user', method: RequestMethod.GET}
        ).apply(CrateUserMiddleware).forRoutes(
            {path:'personal', method: RequestMethod.POST},
            {path:'user', method: RequestMethod.POST},
            {path:'aluno', method: RequestMethod.POST},
        )
    }
}
