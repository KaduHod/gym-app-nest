import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import KnexModule from 'src/knex/knex.module';
import PermissionRepository from 'src/knex/permission.repository';
import CrateUserMiddleware from '../user/createUser.middleware'
import PersonalRepository from 'src/knex/personal.repository';
import UserRepository from 'src/knex/user.repository';
import CreatePersonalService from './services/createPersonal.service';
import { PermissionRepositoryI, PersonalRepositoryI, UserRepositoryI } from 'src/knex/repository';
import ValidateCreateUserArgsService from 'src/user/services/validateCreateUserArgs.service';
import { CreateUserDto } from 'src/user/user.validator';

@Module({
    imports:[KnexModule],
    controllers:[],
    providers:[
        {
            provide:PersonalRepositoryI,
            useClass:PersonalRepository
        },
        {
            provide: UserRepositoryI,
            useClass: UserRepository
        }, 
        {
            provide:PermissionRepositoryI,
            useClass:PermissionRepository,
        }, 
        CreatePersonalService,
        ValidateCreateUserArgsService,
        CreateUserDto
    ],
    exports:[
        CreateUserDto,
        ValidateCreateUserArgsService,
        PermissionRepositoryI,
        UserRepositoryI,
        PersonalRepositoryI, 
        CreatePersonalService
    ]
})
export class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        consumer 
            .apply(CrateUserMiddleware)
            .forRoutes({path:"personal", method: RequestMethod.POST})
    }
} 