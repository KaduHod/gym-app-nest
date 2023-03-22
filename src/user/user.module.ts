import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import KnexModule from 'src/knex/knex.module';
import { UserRepositoryI } from 'src/knex/repository';
import UserRepository from 'src/knex/user.repository';
import UpdateUserService  from './services/updateUser.service';
import ValidateUserDtoService from './services/validateUserDto.service';
import UserController  from './user.controller';
import AttachAlunoDto, { CreateUserDto, QueryUserDto, UpdateUserDto } from './user.validator';
import ValidateUserQueryMiddleware from './middlewares/validateQuery.middleware';
import CrateUserMiddleware  from './middlewares/createUser.middleware'
import CreateUserService from './services/createUser.service';
import AttachAlunoMiddleware from './middlewares/attachAluno.middleware';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    imports:[
        ConfigModule, 
        KnexModule,
    ],
    controllers: [
        UserController
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
        CreateUserDto,
        QueryUserDto,
        AttachAlunoDto,
        PrismaService
    ],
    exports:[
        UserRepositoryI, 
        UpdateUserDto, 
        CreateUserDto, 
        AttachAlunoDto,
        ValidateUserDtoService, 
        CreateUserService,
        UpdateUserService,
        PrismaService
    ]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidateUserQueryMiddleware).forRoutes(
            {path:'user', method: RequestMethod.GET}
        ).apply(CrateUserMiddleware).forRoutes(
            {path:'personal', method: RequestMethod.POST},
            {path:'user', method: RequestMethod.POST},
            {path:'aluno', method: RequestMethod.POST},
        ).apply(AttachAlunoMiddleware).forRoutes(
            {path:'personal/attach-aluno', method: RequestMethod.POST}
        )
    }
}
