import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import KnexModule from 'src/knex/knex.module';
import PermissionRepository from 'src/knex/permission.repository';
import CrateUserMiddleware from '../user/createUser.middleware'
import PersonalRepository from 'src/knex/personal.repository';
import UserRepository from 'src/knex/user.repository';
import CreatePersonalService from './services/createPersonal.service';
import { PermissionRepositoryI, PersonalRepositoryI, UserRepositoryI } from 'src/knex/repository';
import { CreateUserDto } from 'src/user/user.validator';
import ValidateUserDtoService from 'src/user/services/validateUserDto.service';

@Module({
    imports:[KnexModule],
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
        CreateUserDto,
        CreatePersonalService,
        ValidateUserDtoService,
    ],
    exports:[
        CreateUserDto,
        PermissionRepositoryI,
        UserRepositoryI,
        PersonalRepositoryI, 
        CreatePersonalService,
    ]
})
export class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
} 