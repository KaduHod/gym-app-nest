import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import UpdateUserService  from './services/updateUser.service';
import UserController  from './user.controller';
import AttachAlunoDto, { CreateUserDto, QueryUserDto, UpdateUserDto } from './user.validator';
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
        UpdateUserDto,
        CreateUserDto,
        QueryUserDto,
        AttachAlunoDto,
        PrismaService
    ],
    exports:[
        UpdateUserDto, 
        CreateUserDto, 
        AttachAlunoDto,
        CreateUserService,
        UpdateUserService,
        PrismaService
    ]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
}
