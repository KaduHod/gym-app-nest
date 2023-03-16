import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AlunoController from 'src/aluno/aluno.controller';
import AlunoModule from 'src/aluno/aluno.module';
import KnexModule from 'src/knex/knex.module';
import { UserRepositoryI } from 'src/knex/repository';
import UserRepository from 'src/knex/user.repository';
import { PersonalController } from 'src/personal/personal.controller';
import { PersonalModule } from 'src/personal/personal.module';
import UpdateUserService  from './services/updateUser.service';
import ValidateUserDtoService from './services/validateUserDto.service';
import UpdateUserMiddleware  from './updateUser.middleware';
import UserController  from './user.controller';
import { CreateUserDto, UpdateUserDto } from './user.validator';
import ValidateUserQueryMiddleware from './validateQuery.middleware';
import CrateUserMiddleware  from './createUser.middleware'

@Module({
    imports:[
        ConfigModule, 
        KnexModule, 
        PersonalModule, 
        AlunoModule
    ],
    controllers: [
        UserController, 
        PersonalController, 
        AlunoController
    ],
    providers: [ 
        {
            provide:UserRepositoryI,
            useClass: UserRepository
        },
        CreateUserDto,
        UpdateUserDto,
        ValidateUserDtoService,
        UpdateUserService
    ],
    exports:[
        UserRepositoryI,
        CreateUserDto,
        UpdateUserDto, 
        ValidateUserDtoService
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
